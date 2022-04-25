import { ConnectionOptions } from 'typeorm';
import {ConfigModule} from "@nestjs/config";

ConfigModule.forRoot()

const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [process.env.TYPEORM_ENTITIES],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    cli: {
        migrationsDir: './src/migrations',
    }
}

export = config;