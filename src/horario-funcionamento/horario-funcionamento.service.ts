import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HorarioFuncionamentoCreateDto, HorarioFuncionamentoUpdateDto } from './dto';

@Injectable()
export class HorarioFuncionamentoService {
    constructor(private readonly prisma: PrismaService) { }

     async getHorarioFuncionamentoPorLoja(idLoja: string) {
        return await this.prisma.horarioFuncionamento.findMany({
            where: {
                lojaId: idLoja
            }
        })
    }

    async createHorarioFuncionamento(dto: HorarioFuncionamentoCreateDto) {
         try {
            const horarioFuncionamentoExists = await this.prisma.horarioFuncionamento.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome,
                    horaInicio: dto.horaInicio,
                    horaFim: dto.horaFim
                }
            });

            if (horarioFuncionamentoExists) throw new ForbiddenException('Horario de funcionamento já existe');

            const horarioFuncionamento = await this.prisma.horarioFuncionamento.create({
                data: {
                    nome: dto.nome,
                    lojaId: dto.lojaId,
                    horaFim: dto.horaFim,
                    horaInicio: dto.horaInicio
                }
            })

            return horarioFuncionamento;

        } catch (error) {
            throw error;
        }
    }

    async updateHorarioFuncionamento(dto: HorarioFuncionamentoUpdateDto) {
         try {
            const horarioFuncionamentoExists = await this.prisma.horarioFuncionamento.findFirst({
                where: {
                    lojaId: dto.lojaId,
                    nome: dto.nome
                }
            });

            if (horarioFuncionamentoExists) throw new ForbiddenException('Horario de funcionamento já existe');

            const horarioFuncionamento = await this.prisma.horarioFuncionamento.update({
                data: {
                    nome: dto.nome,
                    lojaId: dto.lojaId
                },
                where: {
                    id: dto.id
                }
            })

            return horarioFuncionamento;

        } catch (error) {
            throw error;
        }
    }
}
