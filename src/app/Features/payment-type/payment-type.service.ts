import { PaymentTypes } from './../../_model/payment-types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {
paymentTypes: PaymentTypes[] = [
  {id: 1, title: 'Direct Bank Transfare'},
  {id: 2, title: 'Cheque Payment'},
  {id: 3, title: 'Paypal'},
  {id: 4, title: 'Visa'},
  {id: 5, title: 'Mastercard'},
  {id: 6, title: 'On Dilivery'}
];
  constructor() { }
  
  getAll() {
    return this.paymentTypes;
  }
}
