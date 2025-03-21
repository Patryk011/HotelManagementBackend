import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Repository } from 'typeorm';
import { RoomDto } from './dto/room.dto';
import { HotelService } from 'src/hotel/hotel.service';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    private readonly hotelService: HotelService,
  ) {}

  async createRoom(dto: RoomDto): Promise<Room> {
    const hotel = await this.hotelService.findOne(1);

    const room = this.roomRepository.create({ ...dto, hotel });

    return this.roomRepository.save(room);
  }

  async updateRoom(roomId: number, dto: UpdateRoomDto): Promise<Room> {
    const room = await this.roomRepository.findOne({
      where: { id: roomId },
      relations: ['hotel'],
    });

    if (!room) throw new NotFoundException(`Room with ID ${roomId} not found`);

    Object.assign(room, dto);

    return this.roomRepository.save(room);
  }

  async findRoomById(roomId: number): Promise<Room> {
    const room = await this.roomRepository.findOne({
      where: { id: roomId },
      relations: ['hotel'],
    });

    if (!room) throw new NotFoundException(`Room with ID ${roomId} not found`);

    return room;
  }

  async findAllRooms(): Promise<Room[]> {
    return this.roomRepository.find({ relations: ['hotel'] });
  }
}
