import { Room } from 'src/room/entities/room.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}
