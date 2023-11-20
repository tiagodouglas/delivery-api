import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
    constructor(private autService: AuthService) { }

    @Post('sign-up')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Cria um novo usuario' })
    @ApiResponse({ status: 200, description: 'Success' })
    async signUp(@Body() dto: SignUpDto) {
        return await this.autService.signUp(dto);
    }

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Faz autenticacao de um usuario existente' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Success' })
    async signIn(@Body() dto: SignInDto) {
        return await this.autService.signIn(dto);
    }
}
