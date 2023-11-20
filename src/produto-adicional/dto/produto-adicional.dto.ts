import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class ProdutoAdicionalCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo valor não pode estar vazio' })
    valor: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo produtoId não pode estar vazio' })
    produtoId: number
}

export class ProdutoAdicionalUpdateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    id: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo valor não pode estar vazio' })
    valor: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo produtoId não pode estar vazio' })
    produtoId: string
}