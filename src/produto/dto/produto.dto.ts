import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class ProdutoCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo valor não pode estar vazio' })
    valor: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo categoriaId não pode estar vazio' })
    categoriaId: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: number
}

export class ProdutoUpdateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    id: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo valor não pode estar vazio' })
    valor: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo categoriaId não pode estar vazio' })
    categoriaId: number

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: number
}