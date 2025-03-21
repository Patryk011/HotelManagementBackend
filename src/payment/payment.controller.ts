import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentDto } from './dto/payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@Body() paymentDto: PaymentDto) {
    return this.paymentService.createPayment(paymentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }
}
