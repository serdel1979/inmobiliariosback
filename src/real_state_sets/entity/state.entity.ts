import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RealState } from './realState.entity';

@Entity()
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  state: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_system: Date;

  @Column({ type: 'timestamp' })
  updated_user: Date;

  @Column()
  sub_state: string;

  @ManyToOne(() => RealState, (realState) => realState.states)
  real_state: RealState;
}
