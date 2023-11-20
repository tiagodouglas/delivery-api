import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProdutoCreateDto, ProdutoUpdateDto } from './dto';

@Injectable()
export class ProdutoService {
    constructor(private readonly prisma: PrismaService) {
    }

    async getProdutosPorLoja(idLoja: string) {
        return await this.prisma.produto.findMany({
            where: {
                lojaId: idLoja
            }
        })
    }

    async createProduto(dto: ProdutoCreateDto) {
        try {
            const produtoExists = await this.prisma.produto.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome
                }
            });

            if (produtoExists) throw new ForbiddenException('Produto já existe');

            const produto = await this.prisma.produto.create({
                data: {
                    nome: dto.nome,
                    lojaId: dto.lojaId,
                    valor: dto.valor,
                    categoriaId: dto.categoriaId
                }
            });

            return produto;
        } catch (error) {
            throw error;
        }
    }

    async updateProduto(dto: ProdutoUpdateDto) {
        try {
            const produtoExists = await this.prisma.produto.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome
                }
            });

            if (produtoExists) throw new ForbiddenException('Produto já existe');

            const produto = await this.prisma.produto.update({
                data: {
                    nome: dto.nome,
                    valor: dto.valor,
                    categoriaId: dto.categoriaId
                },
                where: {
                    id: dto.id
                }
            });

            return produto;
        } catch (error) {
            throw error;
        }
    }
}
