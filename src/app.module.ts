import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RealState } from './real_state_sets/entity/realState.entity';
import { TypeRealState } from './real_state_sets/entity/typeRealState.entity';
import * as ormconfig from './ormconfig';
import { RealStateModule } from './real_state_sets/services_controllers/realState.module';




@Module({
  imports: [
    RealStateModule,
    TypeRealState,
    RealState,
    TypeOrmModule.forRoot(ormconfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }