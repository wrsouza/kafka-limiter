import { httpBootstrap } from './bootstrap/http.bootstrap';
import { eventBootstrap } from './bootstrap/event.bootstrap';

async function bootstrap() {
  await eventBootstrap();
  await httpBootstrap();
}

bootstrap();
