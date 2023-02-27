import { Module } from '@nestjs/common';
import { HorarioFuncionamentoService } from './horario-funcionamento.service';
import { HorarioFuncionamentoController } from './horario-funcionamento.controller';

@Module({
  providers: [HorarioFuncionamentoService],
  controllers: [HorarioFuncionamentoController]
})
export class HorarioFuncionamentoModule {}
