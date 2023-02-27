import { Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { CategoriaService } from './categoria.service';
import { CategoriaCreateDto, CategoriaUpdateDto } from './dto';

@Controller('categoria')
@ApiTags('Categoria')
@UseGuards(JwtGuard)
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

    @Post('')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cria uma nova categoria' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async createCategoria(@Body() dto: CategoriaCreateDto) {
        return await this.categoriaService.createCategoria(dto);
    }

    @Put(':idCategoria')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cria uma nova categoria' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async updateCategoria(@Param('idCategoria') id, @Body() dto: CategoriaUpdateDto) {
        dto.id = id;
        return await this.categoriaService.createCategoria(dto);
    }

}
