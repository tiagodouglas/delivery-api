import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { ProdutoAdicionalService } from './produto-adicional.service';

@Controller('produto-adicional')
@ApiTags('ProdutoAdicional')
@UseGuards(JwtGuard)
export class ProdutoAdicionalController {
    constructor(private readonly produtoAdicional: ProdutoAdicionalService) { }
}
