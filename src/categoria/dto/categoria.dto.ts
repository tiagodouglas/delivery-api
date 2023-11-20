import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CategoriaCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: string 

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Nome não pode estar vazio' })
    nome: string
}

export class CategoriaUpdateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Id não pode estar vazio' })
    id: string 

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: string 

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo Nome não pode estar vazio' })
    nome: string
}