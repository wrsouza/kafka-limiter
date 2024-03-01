import { Module } from '@nestjs/common';
import { ReceiveOrderController } from './receive-order.controller';
import { ReceiveOrderService } from './receive-order.service';

@Module({
  imports: [],
  controllers: [ReceiveOrderController],
  providers: [ReceiveOrderService],
})
export class ReceiveOrderModule {}
