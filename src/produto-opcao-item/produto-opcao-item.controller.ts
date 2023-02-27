import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { ProdutoOpcaoItemService } from './produto-opcao-item.service';

@Controller('produto-opcao-item')
@ApiTags('ProdutoOpcaoItem')
@UseGuards(JwtGuard)
export class ProdutoOpcaoItemController {

    constructor(private readonly produtoOpcaoItemService: ProdutoOpcaoItemService) { }
}
