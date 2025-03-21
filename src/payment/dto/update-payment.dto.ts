import { PartialType } from '@nestjs/mapped-types';
import { PaymentDto } from './payment.dto';

export class UpdatePaymentDto extends PartialType(PaymentDto) {}
