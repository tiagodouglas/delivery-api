import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LojaCreateDto, LojaUpdateDto, LojaUpdateStatusDto, } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class LojaService {
    constructor(private readonly prisma: PrismaService) { }

    async getLojas() {
        return await this.prisma.loja.findMany({
            select: {
                id: true,
                nome: true,
            }
        });
    }

    async createLoja(dto: LojaCreateDto) {
        try {
            const loja = await this.prisma.loja.create({
                data: {
                    nome: dto.nome,
                    icone: dto.icone,
                    imageURL: null,
                    statusId: null
                }
            });

            return loja;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') { // duplicated
                    throw new ForbiddenException('E-mail já cadastrado');
                }
            }
            throw error;
        }
    }

    async updateLoja(dto: LojaUpdateDto) {
        try {
            const loja = await this.prisma.loja.update({
                data: {
                    nome: dto.nome,
                    icone: dto.icone,
                    imageURL: null,
                    statusId: null,
                },
                where: {
                    id: dto.id
                }
            });

            return loja;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') { // duplicated
                    throw new ForbiddenException('E-mail já cadastrado');
                }
            }
            throw error;
        }
    }

    async updateLojaStatus(dto: LojaUpdateStatusDto) {
        try {
            const loja = await this.prisma.loja.update({
                data: {
                    statusId: +dto.idStatus
                },
                where: {
                    id: +dto.idLoja
                }
            });

            return loja;

        } catch(error){
            throw error;
        }
    }
    
}
