import { Module } from '@nestjs/common';
import { LojaStatusService } from './loja-status.service';
import { LojaStatusController } from './loja-status.controller';

@Module({
  providers: [LojaStatusService],
  controllers: [LojaStatusController]
})
export class LojaStatusModule {}
