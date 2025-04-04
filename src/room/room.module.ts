import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { HotelModule } from 'src/hotel/hotel.module';

@Module({
  imports: [TypeOrmModule.forFeature([Room]), HotelModule],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
