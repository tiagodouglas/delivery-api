import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LojaStatusModule } from './loja-status/loja-status.module';
import { LojaModule } from './loja/loja.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    LojaStatusModule,
    LojaModule,
    CategoriaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
