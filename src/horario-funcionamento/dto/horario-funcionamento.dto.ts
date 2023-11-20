import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class HorarioFuncionamentoCreateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo horaInicio não pode estar vazio' })
    horaInicio: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo horaFim não pode estar vazio' })
    horaFim: string


    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: string
}

export class HorarioFuncionamentoUpdateDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'Campo id não pode estar vazio' })
    id: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo nome não pode estar vazio' })
    nome: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo horaInicio não pode estar vazio' })
    horaInicio: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo horaFim não pode estar vazio' })
    horaFim: string

    @ApiProperty()
    @IsNotEmpty({ message: 'Campo lojaId não pode estar vazio' })
    lojaId: string
}