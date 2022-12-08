import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimateDetailsPageRoutingModule } from './estimate-details-routing.module';

import { EstimateDetailsPage } from './estimate-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimateDetailsPageRoutingModule
  ],
  declarations: [EstimateDetailsPage]
})
export class EstimateDetailsPageModule {}
