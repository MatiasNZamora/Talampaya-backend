import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperadoresModule } from './operadores/operadores.module';
import { ProductosModule } from './productos/productos.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './environments';
import { DatabaseModule } from './database/database.module';

import config from './config/config';
import { JoiValidationSchema } from './config/joi.validation';

import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';


@Module({
  imports: [
    OperadoresModule, // modulo de operadores
    ProductosModule, // modulo de productos 
    DatabaseModule, // modulo de base de datos
    SeedModule,    // Semilla  
    HttpModule,   // modulo que incorporo de axios

    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      validationSchema: JoiValidationSchema, //validación de schema con joi. 
      load: [config],
      isGlobal:true
    }),
  ],
  controllers: [AppController],
  providers: [ 
    AppService,
    // {
    //   provide: 'TAREA_ASINC',
    //   useFactory: async ( http:HttpService ) => {
    //     const req = http.get('https://jsonplaceholder.typicode.com/posts');
    //     const tarea = await lastValueFrom(req);
    //     return tarea.data;
    //   },
    //   inject: [HttpService],
    // },
  ],  
})

export class AppModule {};