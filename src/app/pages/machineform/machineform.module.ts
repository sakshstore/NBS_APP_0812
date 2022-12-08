import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineformPageRoutingModule } from './machineform-routing.module';

import { MachineformPage } from './machineform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    MachineformPageRoutingModule
  ],
  declarations: [MachineformPage]
})
export class MachineformPageModule {}
