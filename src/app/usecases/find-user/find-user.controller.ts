import { Controller, Get, Param } from '@nestjs/common';
import { FindUserRequest } from './find-user.request';
import { FindUserService } from './find-user.service';
import { Throttle } from '@nestjs/throttler';

@Controller('find-user')
export class FindUserController {
  constructor(private readonly service: FindUserService) {}

  @Throttle({ default: { limit: 3, ttl: 60000 } })
  @Get('/:id')
  findUser(@Param() { id }: FindUserRequest) {
    return this.service.findUser(id);
  }
}
