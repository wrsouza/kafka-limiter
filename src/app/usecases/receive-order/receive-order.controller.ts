import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ReceiveOrderService } from './receive-order.service';

@Controller('receive-order')
export class ReceiveOrderController {
  constructor(private readonly service: ReceiveOrderService) {}

  @EventPattern('order-status')
  receiveOrder(data: any) {
    this.service.receiveOrder(data);
  }
}
