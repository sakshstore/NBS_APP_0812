import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrandListPageRoutingModule } from './brand-list-routing.module';

import { BrandListPage } from './brand-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrandListPageRoutingModule
  ],
  declarations: [BrandListPage]
})
export class BrandListPageModule {}
