import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class LojaCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Email não pode estar vazio' })
    nome: string

    @ApiProperty()
    icone: string

    @ApiProperty()
    @IsEmail({ message: 'Deve ser um e-mail valido' })
    @IsNotEmpty({ message: 'Campo Email não pode estar vazio' })
    email: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Senha não pode estar vazio' })
    senha: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Celular não pode estar vazio' })
    celular: string
}


export class LojaUpdateDto {
    id: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Email não pode estar vazio' })
    nome: string

    @ApiProperty()
    icone: string

    @ApiProperty()
    @IsEmail({ message: 'Deve ser um e-mail valido' })
    @IsNotEmpty({ message: 'Campo Email não pode estar vazio' })
    email: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Senha não pode estar vazio' })
    senha: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Celular não pode estar vazio' })
    celular: string
}

export class LojaUpdateStatusDto {
    idLoja: number

    @ApiProperty()
    idStatus: number
}