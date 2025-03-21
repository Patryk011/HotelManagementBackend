import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { UserModule } from 'src/user/user.module';
import { ReservationModule } from 'src/reservation/reservation.module';

@Module({
  imports: [TypeOrmModule.forFeature([Payment]), UserModule, ReservationModule],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
