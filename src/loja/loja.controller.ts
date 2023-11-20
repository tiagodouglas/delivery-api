import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { LojaCreateDto, LojaUpdateDto, LojaUpdateStatusDto } from './dto';
import { LojaService } from './loja.service';

@Controller('loja')
@ApiTags('Loja')
@UseGuards(JwtGuard)
export class LojaController {
    constructor(private readonly lojaService: LojaService) {
    }

    @Get('')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Retorna todas as lojas cadastradas' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getLojas() {
        return await this.lojaService.getLojas();
    }

    @Post('')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cria uma nova loja' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async createLoja(@Body() dto: LojaCreateDto) {
        return await this.lojaService.createLoja(dto);
    }

    @Put(':idLoja')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualiza uma loja' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async updateLoja(@Param('idLoja') id: string, @Body() dto: LojaUpdateDto) {
        dto.id = id;
        return await this.lojaService.updateLoja(dto);
    }

    @Put('status/:idLoja/:idStatus')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Atualiza  o status de uma loja' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async updateLojaStatus(@Param('idLoja') idLoja: string, @Param('idStatus') idStatus: string) {
        return await this.lojaService.updateLojaStatus({ idLoja, idStatus });
    }
}
