import { Module } from '@nestjs/common';
import { RealStateService } from './realState.service';
import { RealStateController } from './realState.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeRealState } from './entity/typeRealState.entity';
import { RealState } from './entity/realState.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RealState, TypeRealState])],
  providers: [RealStateService],
  controllers: [RealStateController],
})
export class RealStateModule {}
