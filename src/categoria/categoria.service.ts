import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriaCreateDto, CategoriaUpdateDto } from './dto';

@Injectable()
export class CategoriaService {
    constructor(private readonly prisma: PrismaService) { }

    async getCategoriasPorLoja(idLoja: number) {
        return await this.prisma.categoria.findMany({
            where: {
                lojaId: +idLoja
            }
        })
    }

    async createCategoria(dto: CategoriaCreateDto) {
        try {
            const categoriaExists = await this.prisma.categoria.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome
                }
            });

            if (categoriaExists) throw new ForbiddenException('Categoria já existe');

            const categoria = await this.prisma.categoria.create({
                data: {
                    nome: dto.nome,
                    lojaId: dto.lojaId
                }
            })

            return categoria;

        } catch (error) {
            throw error;
        }
    }

    async updateCategoria(dto: CategoriaUpdateDto) {
        try {
            const categoriaExists = await this.prisma.categoria.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome
                }
            });

            if (categoriaExists) throw new ForbiddenException('Categoria já existe');

            const categoria = await this.prisma.categoria.update({
                data: {
                    nome: dto.nome
                },
                where: {
                    id: dto.id
                }
            });

            return categoria;
        } catch (error) {
            throw error;
        }
    }
}
