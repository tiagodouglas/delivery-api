import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { HorarioFuncionamentoCreateDto, HorarioFuncionamentoUpdateDto } from './dto';
import { HorarioFuncionamentoService } from './horario-funcionamento.service';

@Controller('horario-funcionamento')
@ApiTags('HorarioFuncionamento')
@UseGuards(JwtGuard)
export class HorarioFuncionamentoController {
    constructor(private readonly horarioFuncionamentoService: HorarioFuncionamentoService) { }

    @Get(':idLoja')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Busca o horario de funcionamento da loja' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getHorarioFuncionamento(@Param('idLoja') id) {
        return await this.horarioFuncionamentoService.getHorarioFuncionamentoPorLoja(id);
    }

    
    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cria um horario de funcionamento' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async createHorarioFuncionamento(@Body() dto: HorarioFuncionamentoCreateDto) {
        return await this.horarioFuncionamentoService.createHorarioFuncionamento(dto);
    }

    @Put(':idHorarioFuncionamento')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Altera um horario de funcionamento cadastrado' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async updateHorarioFuncionamento(@Param('idHorarioFuncionamento') id: number, @Body() dto: HorarioFuncionamentoUpdateDto) {
        dto.id = id;
        return await this.horarioFuncionamentoService.updateHorarioFuncionamento(dto);
    }
}
