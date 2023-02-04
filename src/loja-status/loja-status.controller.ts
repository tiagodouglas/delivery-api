import { Controller, Get, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { LojaStatusService } from './loja-status.service';

@Controller('loja-status')
@ApiTags('Loja')
@UseGuards(JwtGuard)
export class LojaStatusController {
    constructor(private readonly lojaStatusService: LojaStatusService) {
        
    }

    @Get('')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Busca os status disponiveis para uma loja' })
    @ApiResponse({ status: 401, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async getStatus() {
        return await this.lojaStatusService.getStatus();
    }
}
