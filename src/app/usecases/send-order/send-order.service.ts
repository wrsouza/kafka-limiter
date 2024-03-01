import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { SendOrderEvent } from './send-order.event';
import { faker } from '@faker-js/faker';

@Injectable()
export class SendOrderService {
  constructor(
    @Inject('ORDERS_SERVICE')
    private readonly clientKafka: ClientKafka,
  ) {}

  async sendOrder() {
    const orderId = faker.number.int({ min: 100, max: 9999 }).toString();
    const userId = faker.number.int({ min: 100, max: 9999 }).toString();
    this.clientKafka.emit('order-status', new SendOrderEvent(orderId, userId));
  }
}
