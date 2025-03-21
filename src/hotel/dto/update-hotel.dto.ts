import { HotelDto } from './hotel.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateHotelDto extends PartialType(HotelDto) {}
