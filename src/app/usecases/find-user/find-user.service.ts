import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserService {
  findUser(id: string) {
    return { id };
  }
}
