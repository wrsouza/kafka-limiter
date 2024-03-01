import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

export async function httpBootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
