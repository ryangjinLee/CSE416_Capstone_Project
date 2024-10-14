import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const SERVER_PORT = 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API documentation using Swagger')
    .setVersion('1.0')
    .addTag('API')
    .build();

  // allow localhost client server
  app.enableCors({
    origin: 'http://localhost:3000',
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(SERVER_PORT);
}
bootstrap();
