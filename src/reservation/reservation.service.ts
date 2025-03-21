import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { RoomService } from 'src/room/room.service';
import { UserService } from 'src/user/user.service';
import { ReservationDto } from './dto/reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    private readonly roomService: RoomService,
    private readonly userService: UserService,
  ) {}

  async createReservation(dto: ReservationDto): Promise<Reservation> {
    const user = await this.userService.findOne(dto.userId);

    if (!user)
      throw new NotFoundException(`User with Id: ${dto.userId} not found`);

    const room = await this.roomService.findRoomById(dto.roomId);

    if (!room)
      throw new NotFoundException(`Room with Id: ${dto.roomId} not found`);

    const reservation = this.reservationRepository.create({
      user,
      room,
      checkInDate: dto.checkInDate,
      checkOutDate: dto.checkOutDate,
      status: 'pending',
    });

    return this.reservationRepository.save(reservation);
  }

  async findOne(id: number): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({
      where: { id },
      relations: ['room', 'user'],
    });

    if (!reservation)
      throw new NotFoundException(`Reservation with Id: ${id} not found`);

    return reservation;
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  async update(
    id: number,
    updateReservationDto: UpdateReservationDto,
  ): Promise<Reservation> {
    await this.reservationRepository.update(id, updateReservationDto);
    return this.findOne(id);
  }
}
