import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryProductListPageRoutingModule } from './category-product-list-routing.module';

import { CategoryProductListPage } from './category-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    CategoryProductListPageRoutingModule
  ],
  declarations: [CategoryProductListPage]
})
export class CategoryProductListPageModule {}
