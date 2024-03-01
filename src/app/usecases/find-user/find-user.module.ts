import { Module } from '@nestjs/common';
import { FindUserController } from './find-user.controller';
import { FindUserService } from './find-user.service';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  controllers: [FindUserController],
  providers: [FindUserService],
})
export class FindUserModule {}
