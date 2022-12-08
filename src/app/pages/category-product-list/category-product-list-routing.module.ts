import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryProductListPage } from './category-product-list.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryProductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryProductListPageRoutingModule {}
