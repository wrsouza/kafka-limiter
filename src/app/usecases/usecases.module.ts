import { Module } from '@nestjs/common';
import { SendOrderModule } from './send-order/send-order.module';
import { ReceiveOrderModule } from './receive-order/receive-order.module';
import { FindUserModule } from './find-user/find-user.module';

@Module({
  imports: [FindUserModule, SendOrderModule, ReceiveOrderModule],
})
export class UsecasesModule {}
