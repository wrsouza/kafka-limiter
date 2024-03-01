import { Module } from '@nestjs/common';
import { UsecasesModule } from './app/usecases/usecases.module';

@Module({
  imports: [UsecasesModule],
})
export class AppModule {}
