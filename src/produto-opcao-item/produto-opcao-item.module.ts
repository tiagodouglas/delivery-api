import { Module } from '@nestjs/common';
import { ProdutoOpcaoItemService } from './produto-opcao-item.service';
import { ProdutoOpcaoItemController } from './produto-opcao-item.controller';

@Module({
  providers: [ProdutoOpcaoItemService],
  controllers: [ProdutoOpcaoItemController]
})
export class ProdutoOpcaoItemModule {}
