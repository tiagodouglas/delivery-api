import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class ProdutoOpcaoItemCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    produtoOpcaoId: number
}

export class ProdutoOpcaoItemUpdateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    id: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    produtoOpcaoId: number
}