import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationController } from './reservation.controller';
import { Reservation } from './entities/reservation.entity';
import { ReservationService } from './reservation.service';
import { RoomModule } from 'src/room/room.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation]), RoomModule, UserModule],
  controllers: [ReservationController],
  providers: [ReservationService],
  exports: [ReservationService],
})
export class ReservationModule {}
