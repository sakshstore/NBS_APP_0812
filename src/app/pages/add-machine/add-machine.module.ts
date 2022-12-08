import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMachinePageRoutingModule } from './add-machine-routing.module';

import { AddMachinePage } from './add-machine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddMachinePageRoutingModule
  ],
  declarations: [AddMachinePage]
})
export class AddMachinePageModule {}
