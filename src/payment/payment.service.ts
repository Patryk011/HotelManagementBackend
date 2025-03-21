import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { UserService } from 'src/user/user.service';
import { ReservationService } from 'src/reservation/reservation.service';
import { PaymentDto } from './dto/payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    private readonly userService: UserService,
    private readonly reservationService: ReservationService,
  ) {}

  async createPayment(dto: PaymentDto): Promise<Payment> {
    const user = await this.userService.findOne(dto.userId);

    if (!user)
      throw new NotFoundException(`User with Id: ${dto.userId} not found`);

    const reservation = await this.reservationService.findOne(
      dto.reservationId,
    );

    if (!reservation)
      throw new NotFoundException(
        `Reservation with id: ${dto.reservationId} not found`,
      );

    const payment = this.paymentRepository.create({
      user,
      reservation,
      amount: dto.amount,
      paymentMethod: dto.paymentMethod,
      status: 'pending',
    });

    return this.paymentRepository.save(payment);
  }

  async findOne(id: number): Promise<Payment> {
    const payment = await this.paymentRepository.findOne({
      where: { id },
      relations: ['user', 'reservation'],
    });

    if (!payment)
      throw new NotFoundException(`Payment with id: ${id} not found`);

    return payment;
  }

  async findAll(): Promise<Payment[]> {
    return this.paymentRepository.find();
  }

  async update(id: number, updateDto: UpdatePaymentDto): Promise<Payment> {
    await this.paymentRepository.update(id, updateDto);
    return this.findOne(id);
  }
}
