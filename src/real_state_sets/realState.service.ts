import { State } from './entity/state.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealStateDto } from './createRealState.dto';
import { RealState } from './entity/realState.entity';
import { TypeRealState } from './entity/typeRealState.entity';
import { District } from './entity/district.entity';
import { ReturnRealStateDto } from './returnRealState.dto';
import { from } from 'rxjs';


@Injectable()
export class RealStateService {
  constructor(
    @InjectRepository(RealState) private realStateRepository: Repository<RealState>,
    @InjectRepository(TypeRealState) private typeRealStateRepository: Repository<TypeRealState>,
    @InjectRepository(District) private districtRepository: Repository<District> ) {}

  async findAll(params): Promise<RealState[]> {
    return await this.realStateRepository.find();
  }

  async createRealState(newRealState: RealStateDto): Promise<RealState> {
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

    let retorna: RealState = await this.realStateRepository.findOne(realStateId,{ relations: ["type_real_state"]});
    console.log(retorna);
    return retorna;
  }


}