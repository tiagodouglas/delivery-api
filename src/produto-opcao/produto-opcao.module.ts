import { Module } from '@nestjs/common';
import { ProdutoOpcaoService } from './produto-opcao.service';
import { ProdutoOpcaoController } from './produto-opcao.controller';

@Module({
  providers: [ProdutoOpcaoService],
  controllers: [ProdutoOpcaoController]
})
export class ProdutoOpcaoModule {}
