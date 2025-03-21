import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HotelModule } from './hotel/hotel.module';
import { PaymentModule } from './payment/payment.module';
import { RoomModule } from './room/room.module';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,

      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    HotelModule,
    PaymentModule,
    RoomModule,
    ReservationModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
