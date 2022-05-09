import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RealState } from './realState.entity';

@Entity()
export class TypeRealState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(() => RealState, (realState) => realState.type_real_state, {
    cascade: true,
    eager: true
  })
  realState: RealState[];
}
