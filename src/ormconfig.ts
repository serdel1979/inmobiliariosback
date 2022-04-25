import { ConnectionOptions } from 'typeorm';
import {ConfigModule} from "@nestjs/config";
import { join } from 'node:path/win32';
//import { join } from 'path';

ConfigModule.forRoot()

const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    synchronize: true,
    migrationsRun: true,
    logging: true,
    cli: {
        migrationsDir: './src/migrations',
    }
}

export = config;