import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class SignInDto {
    @ApiProperty()
    @IsEmail({ message: 'Deve ser um e-mail valido' })
    @IsNotEmpty({ message: 'Campo Email não pode estar vazio' })
    email: string

    @ApiProperty()
    @IsString({ message: 'Campo senha deve ser uma string valida' })
    @IsNotEmpty({ message: 'Campo Senha não pode estar vazio' })
    senha: string
}

export class SignUpDto {
    @ApiProperty()
    @IsEmail({ message: 'Deve ser um e-mail valido' })
    @IsNotEmpty({ message: 'Campo Email não pode estar vazio' })
    email: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Celular não pode estar vazio' })
    celular: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Senha não pode estar vazio' })
    senha: string
}