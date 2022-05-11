import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { TypeRealState } from './typeRealState.entity';
import { State } from './state.entity';
import { District } from './district.entity';
@Entity()
export class RealState extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  id_cou: number;

  @Column('text')
  id_mae: number;

  @Column()
  holders_count: number;

  @Column()
  priority: number;

  @Column()
  register_source: string;

  @ManyToOne(() => TypeRealState, (type_real_state) => type_real_state.realState)
  @JoinColumn({ name: 'typeRealStateId' })
  type_real_state: TypeRealState;


  @OneToMany(() => State, (state) => state.real_state)
  states: State[];


  @ManyToOne(() => District, (district) => district.realstates)
  district: District;
}
