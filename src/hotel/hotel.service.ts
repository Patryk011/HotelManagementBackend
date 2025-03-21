import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Repository } from 'typeorm';
import { HotelDto } from './dto/hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  async create(hotelDto: HotelDto): Promise<Hotel> {
    const newHotel = this.hotelRepository.create(hotelDto);
    return this.hotelRepository.save(newHotel);
  }

  async findOne(id: number): Promise<Hotel> {
    const hotel = await this.hotelRepository.findOneBy({ id });

    if (!hotel) throw new Error(`Hotel with ID ${id} not found`);

    return hotel;
  }

  async update(id: number, updateHotelDto: UpdateHotelDto): Promise<Hotel> {
    await this.hotelRepository.update(id, updateHotelDto);
    return this.findOne(id);
  }
}
