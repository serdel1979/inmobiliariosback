import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RealState } from './entity/realState.entity';
import { RealStateDTO } from './realState.dto';

@Injectable()
export class RealStateService {
  constructor(
    @InjectRepository(RealState)
    private realStateRepository: Repository<RealState>,
  ) {}

  async findAll(params): Promise<RealState[]> {
    return await this.realStateRepository.find();
  }

  createRealState(newRealState: RealStateDTO): Promise<RealState> {
    return this.realStateRepository.save(newRealState);
  }

  //  async deleteBook(bookId: string): Promise<any> {
  //     return await this.realStateRepository.delete({ id: parseInt(bookId) });
  //   }

  /*async updateBook(bookId: string, newBook: BookDto): Promise<Book> {
    let toUpdate = await this.realStateRepository.findOne({
      where: { id: parseInt(bookId) },
    });
    let updated = Object.assign(toUpdate, newBook);
    return this.realStateRepository.save(updated);
  }*/

  async findRealState(realStateId: number): Promise<RealState> {
    return await this.realStateRepository.findOne({
      where: { id: realStateId },
    });
  }
}
