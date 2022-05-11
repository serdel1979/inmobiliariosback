import { State } from './entity/state.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealStateDto } from './createRealState.dto';
import { RealState } from './entity/realState.entity';
import { TypeRealState } from './entity/typeRealState.entity';
import { District } from './entity/district.entity';
import { ReturnRealStateDto } from './returnRealState.dto';
import { from, throwError } from 'rxjs';


@Injectable()
export class RealStateService {
  constructor(
    @InjectRepository(RealState) private realStateRepository: Repository<RealState>,
    @InjectRepository(TypeRealState) private typeRealStateRepository: Repository<TypeRealState>,
    @InjectRepository(District) private districtRepository: Repository<District>) { }

  async findAll(params): Promise<RealState[]> {
    return await this.realStateRepository.find({ relations: ["type_real_state"] });
  }

  async createRealState(newRealState: RealStateDto): Promise<RealState> {
    newRealState.current_state = "NO CONFIRMADO";
    return this.realStateRepository.save(newRealState);
  }

  async deleteRealState(realStateId: string): Promise<any> {
    let relState = this.findRealState(parseInt(realStateId));
    var my_error: Error = new Error("Error de borrado!");
    console.log((await relState).states.length);
    try {
      return await this.realStateRepository.delete({ id: parseInt(realStateId) });
    } catch (err) {
      throw my_error;
    }
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
    return await this.realStateRepository.findOne(realStateId, { relations: ["type_real_state"] });
  }


}