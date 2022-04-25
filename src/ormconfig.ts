import { ConnectionOptions } from 'typeorm';
import {ConfigModule} from "@nestjs/config";

ConfigModule.forRoot()

const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    //entities: [__dirname + '\\entity\\src*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    //migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: './src/migrations',
    }
}

export = config;