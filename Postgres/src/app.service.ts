import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config/config';
import { Client } from 'pg';

@Injectable()
export class AppService {
  constructor( 
    // private configService:ConfigService,
    @Inject(config.KEY) private configServ: ConfigType<typeof config>, // inyectamos el tipado
    @Inject('PG') private clientPg:Client,
  ){};

  getHello(): string {
    const apiKey = this.configServ.apiKey;
    const dbname = this.configServ.database.name; // tipado nombre de variables
    const dbport = this.configServ.database.port;
    return `La llave de la aplicacion es: ${apiKey}, el nombre y puerto de la DB: ${dbname}, ${dbport}`;
  }

  getTasks() {
    return new Promise((resolve, reject) => {
      this.clientPg.query('SELECT * FROM tareas', (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res.rows);
      });
    });
  };

};
