import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriaService } from './categoria.service';

@Controller('categoria')
@ApiTags('Categoria')
export class CategoriaController {
    constructor(private readonly categoriaService: CategoriaService) {
    }
    
    @Get(':idLoja')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Busca as categorias de uma loja' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getCategoriasPorLoja(@Param('idLoja') idLoja: number) {
        return await this.categoriaService.getCategoriasPorLoja(idLoja);
    }

}
