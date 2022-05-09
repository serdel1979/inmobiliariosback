import { State } from './entity/state.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealStateDto } from './createRealState.dto';
import { RealState } from './entity/realState.entity';
import { TypeRealState } from './entity/typeRealState.entity';


@Injectable()
export class RealStateService {
  constructor(
    @InjectRepository(RealState)
    private realStateRepository: Repository<RealState>,
    @InjectRepository(TypeRealState) private typeRealStateRepository: Repository<TypeRealState>
  ) {}

  async findAll(params): Promise<RealState[]> {
    return await this.realStateRepository.find();
  }

  async createRealState(newRealState: RealStateDto): Promise<RealState> {
    console.log("------------------------------------------------");
    console.log(newRealState);
    let typerealstate = await this.typeRealStateRepository.save({"description":"CERRADO"});
    newRealState.typeRealStateId = typerealstate.id;
    console.log(typerealstate);
    console.log("------------------------------------------------");
    
    return this.realStateRepository.save(newRealState);
  }

  async deleteRealState(realStateId: string): Promise<any> {
    return await this.realStateRepository.delete({ id: parseInt(realStateId) });
  }

  async updateRealState(
    realStateId: string,
    newRealState: RealStateDto,
  ): Promise<RealState> {
    console.log(realStateId);
    const toUpdate = await this.realStateRepository.findOne({
      where: { id: parseInt(realStateId) },
    });
    const updated = Object.assign(toUpdate, newRealState);
    return this.realStateRepository.save(updated);
  }

  async findRealState(realStateId: number): Promise<RealState> {
    return await this.realStateRepository.findOne({
      where: { id: realStateId },
    });
  }
}
