import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LojaStatusModule } from './loja-status/loja-status.module';
import { LojaModule } from './loja/loja.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { ProdutoOpcaoModule } from './produto-opcao/produto-opcao.module';
import { ProdutoOpcaoItemModule } from './produto-opcao-item/produto-opcao-item.module';
import { ProdutoAdicionalModule } from './produto-adicional/produto-adicional.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { HorarioFuncionamentoModule } from './horario-funcionamento/horario-funcionamento.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    LojaStatusModule,
    LojaModule,
    CategoriaModule,
    ProdutoModule,
    ProdutoOpcaoModule,
    ProdutoOpcaoItemModule,
    ProdutoAdicionalModule,
    FormaPagamentoModule,
    HorarioFuncionamentoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
