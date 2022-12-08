import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    PaymentPageRoutingModule
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}

 