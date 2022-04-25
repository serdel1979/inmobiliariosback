import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeRealState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;
}
