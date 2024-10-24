import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  
  // pone el prefijo /api a todos los controladores de forma global.
  app.setGlobalPrefix('api'); 
  
  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('PedidosAPI')
    .setDescription('Documentación para la API de pedidos')
    .setVersion('1.0.0')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(4000);
};

bootstrap();
