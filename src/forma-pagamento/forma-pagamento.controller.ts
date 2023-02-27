import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { FormaPagamentoCreateDto, FormaPagamentoUpdateDto } from './dto';
import { FormaPagamentoService } from './forma-pagamento.service';

@Controller('forma-pagamento')
@ApiTags('FormaPagamento')
@UseGuards(JwtGuard)
export class FormaPagamentoController {
    constructor(private readonly formaPagamentoService: FormaPagamentoService) { }

    @Get(':idLoja')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Busca as formas de pagamento cadastradas' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getProdutos(@Param('idLoja') id) {
        return await this.formaPagamentoService.getFormaPagamentoPorLoja(id);
    }


    @Post()
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cria uma nova forma de pagamento' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async createFormaPagamento(@Body() dto: FormaPagamentoCreateDto) {
        return await this.formaPagamentoService.createFormaPagamento(dto);
    }

    @Put(':idFormaPagamento')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Altera uma forma de pagamento cadastrada' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async updateProduto(@Param('idFormaPagamento') id: number, @Body() dto: FormaPagamentoUpdateDto) {
        dto.id = id;
        return await this.formaPagamentoService.updateFormaPagamento(dto);
    }
}
