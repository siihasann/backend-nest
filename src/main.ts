import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
