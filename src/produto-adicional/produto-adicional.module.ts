import { Module } from '@nestjs/common';
import { ProdutoAdicionalService } from './produto-adicional.service';
import { ProdutoAdicionalController } from './produto-adicional.controller';

@Module({
  providers: [ProdutoAdicionalService],
  controllers: [ProdutoAdicionalController]
})
export class ProdutoAdicionalModule {}
