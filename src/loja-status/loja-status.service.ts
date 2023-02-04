import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LojaStatusService {
    constructor(private readonly prisma: PrismaService) {
    }

    async getStatus() {
        return this.prisma.lojaStatus.findMany();
    }

}
