import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { ProdutoCreateDto, ProdutoUpdateDto } from './dto';
import { ProdutoService } from './produto.service';

@Controller('produto')
@ApiTags('Produto')
@UseGuards(JwtGuard)
export class ProdutoController {
    constructor(private readonly produtoService: ProdutoService) { }

    @Get(':idLoja')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Busca todos os produtos cadastrados' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getProdutos(@Param('idLoja') id) {
        return await this.produtoService.getProdutosPorLoja(id);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cria um novo produto' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async createProduto(@Body() dto: ProdutoCreateDto) {
        return await this.produtoService.createProduto(dto);
    }

    @Put(':idProduto')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Altera um produto cadastrado' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async updateProduto(@Param('idProduto') id: number, @Body() dto: ProdutoUpdateDto) {
        dto.id = id;
        return await this.produtoService.updateProduto(dto);
    }
}
