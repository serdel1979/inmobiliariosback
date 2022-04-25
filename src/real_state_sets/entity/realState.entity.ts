import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { TypeRealState } from './typeRealState.entity';

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

  @OneToOne(() => TypeRealState)
  @JoinColumn()
  type_real_state: TypeRealState;
}
