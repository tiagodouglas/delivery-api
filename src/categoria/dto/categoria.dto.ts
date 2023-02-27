import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CategoriaCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: number 

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Nome não pode estar vazio' })
    nome: string
}

export class CategoriaUpdateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Id não pode estar vazio' })
    id: number 

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: number 

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Nome não pode estar vazio' })
    nome: string
}