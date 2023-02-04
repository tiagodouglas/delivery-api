import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaService {
    constructor(private readonly prisma: PrismaService) { }

   async getCategoriasPorLoja(idLoja: number){
        return await this.prisma.categoria.findMany({
            where: {
                lojaId: +idLoja
            }
        })
   }
}
