import { Controller, Post } from '@nestjs/common';
import { SendOrderService } from './send-order.service';

@Controller('send-order')
export class SendOrderController {
  constructor(private readonly service: SendOrderService) {}

  @Post()
  sendOrder() {
    this.service.sendOrder();
  }
}
