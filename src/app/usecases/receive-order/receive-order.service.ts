import { Injectable } from '@nestjs/common';
import { ReceiveOrderEvent } from './receive-order.event';

@Injectable()
export class ReceiveOrderService {
  async receiveOrder(payload: ReceiveOrderEvent) {
    console.log('payload', payload);
  }
}
