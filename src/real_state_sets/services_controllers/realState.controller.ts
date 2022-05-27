import {
  Controller,
  Get,
  Param,
  Req,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { RealStateService } from './realState.service';
import { Request } from 'express';
import { RealState } from '../entity/realState.entity';
import { RealStateDto } from '../dto/createRealState.dto';
import { TypeRealState } from '../entity/typeRealState.entity';

@Controller('real_state')
export class RealStateController {
  constructor(private realStateService: RealStateService) { }

  @Get()
  findAll(@Req() request: Request): Promise<RealState[]> {
    return this.realStateService.findAll(request.query);
  }

  @Get('type_real_state')
  allTypes(@Req() request: Request): Promise<TypeRealState[]> {
    return this.realStateService.getTypeRealStates();
  }

  @Post()
  createRealState(@Body() newRealState: RealStateDto): Promise<RealState> {
    return this.realStateService.createRealState(newRealState);
  }

  @Delete(':realStateId')
  deleteRealState(@Param('realStateId') realStateId: string) {
    return this.realStateService.deleteRealState(realStateId);
  }

  @Put(':realStateId')
  updateRealState(
    @Param('realStateId') realStateId: string,
    @Body() body,
  ): Promise<RealState> {
    const newRealState: RealStateDto = body;
    return this.realStateService.updateRealState(realStateId, newRealState);
  }

  @Get(':realStateId')
  async findRealState(@Param('realStateId') realStateId: number): Promise<RealState> {
    let ret: RealState;
    ret = await this.realStateService.findRealState(realStateId);
    return ret;
  }
}
