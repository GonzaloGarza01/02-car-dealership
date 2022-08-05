import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Solo deja la data que estoy esperando
      forbidNonWhitelisted: true, //Manda un mensaje de error si se manda data diferente a la esperada
    })
  )

  await app.listen(3000);
}
bootstrap();
