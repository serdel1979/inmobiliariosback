import { RealStateDTO } from './realState.dto';
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
import { RealState } from './entity/realState.entity';

@Controller('real_state')
export class RealStateController {
  constructor(private realStateService: RealStateService) {}

  @Get()
  findAll(@Req() request: Request): Promise<RealState[]> {
    return this.realStateService.findAll(request.query);
  }

  @Post()
  createRealState(@Body() newRealState: RealStateDTO): Promise<RealState> {
    console.log(newRealState);
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
    const newRealState: RealStateDTO = body;
    return this.realStateService.updateRealState(realStateId, newRealState);
  }

  @Get(':realStateId')
  findRealState(@Param('realStateId') realStateId: number): Promise<RealState> {
    return this.realStateService.findRealState(realStateId);
  }
}
