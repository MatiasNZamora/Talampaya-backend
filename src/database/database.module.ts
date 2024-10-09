import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from 'src/config/config';

const APIKEY = 'DEV-123';
const APIKEYPROD = 'PROD-234';

@Global()
@Module({
    providers: [
        {
            provide: 'APIKEY',
            useValue: process.env.NODE_ENV === 'prod' ? APIKEYPROD : APIKEY,
        }, 
        { 
        provide: 'PG',
        useFactory: (configService: ConfigType<typeof config>) => {
            const { user, host, dbName, password, port } = configService.postgres;
            const client = new Client({
                user,
                host,
                database: dbName,
                password,
                port,
            });
            client.connect();
            return client;
        },
        inject: [config.KEY],
    }],        
    exports: [ 'APIKEY', 'PG' ], 
})

export class DatabaseModule {}