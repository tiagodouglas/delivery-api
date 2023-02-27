import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { ProdutoOpcaoService } from './produto-opcao.service';

@Controller('produto-opcao')
@ApiTags('ProdutoOpcao')
@UseGuards(JwtGuard)
export class ProdutoOpcaoController {
    constructor(private readonly produtoOpcaoService: ProdutoOpcaoService) { }
}
