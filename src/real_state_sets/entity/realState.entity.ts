import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { TypeRealState } from './typeRealState.entity';
import { State } from './state.entity';
import { District } from './district.entity';
@Entity()
export class RealState {
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

  @ManyToOne(() => TypeRealState, { nullable: false })
  @JoinColumn()
  type_real_state: TypeRealState;

  @ManyToOne(() => District, { nullable: false })
  @JoinColumn()
  district: District;

  @OneToMany(() => State, (state) => state.real_state, { cascade: true })
  states: State[];
}
