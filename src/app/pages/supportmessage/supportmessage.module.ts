import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportmessagePageRoutingModule } from './supportmessage-routing.module';

import { SupportmessagePage } from './supportmessage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportmessagePageRoutingModule
  ],
  declarations: [SupportmessagePage]
})
export class SupportmessagePageModule {}
