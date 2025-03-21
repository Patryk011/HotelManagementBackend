import { Hotel } from '../../hotel/entities/hotel.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: string;

  @Column()
  capacity: number;

  @Column('decimal')
  price: number;

  @Column({ default: true })
  isAvailable: boolean;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotel: Hotel;
}
