import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class FormaPagamentoCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: number
}

export class FormaPagamentoUpdateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    id: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: number
}