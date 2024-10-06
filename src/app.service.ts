import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config/config';

@Injectable()
export class AppService {
  constructor( 
    private configService:ConfigService,
    @Inject(config.KEY) private configServ: ConfigType<typeof config>, // inyectamos el tipado
  ){};

  getHello(): string {
    //return 'Hello World!';
    //const apiKey = this.config.get<string>('APIKEY'); // sin tipado
    //const dbname = this.config.get('DB_NAME');
    const apiKey = this.configServ.apiKey;
    const dbname = this.configServ.database.name; // tipado nombre de variables
    const dbport = this.configServ.database.port;
    return `La llave de la aplicacion es: ${apiKey}, el nombre y puerto de la DB: ${dbname}, ${dbport}`;
  }

  getUseFactory(): string {
    return ''
  };

};
