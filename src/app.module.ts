import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './entities/hotel.entity';
import { Room } from './entities/room.entity';
import { Reservation } from './entities/reservation.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,

      entities: [Hotel, Room],

      synchronize: true,
    }),
    AuthModule,
    TypeOrmModule.forFeature([Hotel, Room, Reservation, User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
