import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly jwt: JwtService,
        private readonly configService: ConfigService) {
    }

    async signIn(dto: SignInDto) {

        const user = await this.prisma.usuario.findUnique({
            where: {
                email: dto.email
            }
        });

        if (!user) throw new ForbiddenException('Usuário não existente');

        const pwdMatches = await argon.verify(user.hash, dto.senha);

        if (!pwdMatches) throw new ForbiddenException('E-mail ou Senha está incorreto');

        const lojas = await this.prisma.usuarioLoja.findFirst({
            where: {
                usuarioId: user.id
            },
            select: {
                loja: true
            }
        });

        const token = await this.signToken(user.id, user.email);

        delete user.hash;

        return {
            ...user,
            ...token,
            ...lojas
        }
    }

    async signUp(dto: SignUpDto) {
        const hash = await argon.hash(dto.senha);

        try {
            const user = await this.prisma.usuario.create({
                data: {
                    email: dto.email,
                    nome: dto.nome,
                    celular: dto.celular,
                    hash,
                    roleId: 'a414a16b-63ab-4b90-9f42-33fc832883a2' // usuario comum
                },
                select: {
                    id: true,
                    nome: true,
                    celular: true,
                    email: true,
                    hash: false
                }
            })

            return user;

        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') { // duplicated
                    throw new ForbiddenException('E-mail já cadastrado');
                }
            }

            throw error;
        }
    }

    async signToken(userId: string, email: string): Promise<{ accessToken: string, expiresIn: number }> {
        const payload = {
            sub: userId,
            email,
        }

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '1h',
            secret: this.configService.get('SECRET')
        });

        return {
            accessToken: token,
            expiresIn: 60 * 60 * 60
        }
    }
}
