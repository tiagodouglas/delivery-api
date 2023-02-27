import { Module } from '@nestjs/common';
import { FormaPagamentoService } from './forma-pagamento.service';
import { FormaPagamentoController } from './forma-pagamento.controller';

@Module({
  providers: [FormaPagamentoService],
  controllers: [FormaPagamentoController]
})
export class FormaPagamentoModule {}
