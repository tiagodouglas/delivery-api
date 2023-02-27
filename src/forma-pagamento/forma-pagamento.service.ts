import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormaPagamentoCreateDto, FormaPagamentoUpdateDto } from './dto';

@Injectable()
export class FormaPagamentoService {
    constructor(private readonly prisma: PrismaService) { }

    async getFormaPagamentoPorLoja(idLoja: number) {
        return await this.prisma.formaPagamento.findMany({
            where: {
                lojaId: +idLoja
            }
        })
    }

    async createFormaPagamento(dto: FormaPagamentoCreateDto) {
         try {
            const formaPagamentoExists = await this.prisma.formaPagamento.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome
                }
            });

            if (formaPagamentoExists) throw new ForbiddenException('Forma Pagamento já existe');

            const formaPagamento = await this.prisma.formaPagamento.create({
                data: {
                    nome: dto.nome,
                    lojaId: dto.lojaId
                }
            })

            return formaPagamento;

        } catch (error) {
            throw error;
        }
    }

    async updateFormaPagamento(dto: FormaPagamentoUpdateDto) {
         try {
            const formaPagamentoExists = await this.prisma.formaPagamento.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome
                }
            });

            if (formaPagamentoExists) throw new ForbiddenException('Forma Pagamento já existe');

            const formaPagamento = await this.prisma.formaPagamento.update({
                data: {
                    nome: dto.nome,
                    lojaId: dto.lojaId
                },
                where: {
                    id: dto.id
                }
            })

            return formaPagamento;

        } catch (error) {
            throw error;
        }
    }
}
