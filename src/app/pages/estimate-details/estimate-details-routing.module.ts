import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimateDetailsPage } from './estimate-details.page';

const routes: Routes = [
  {
    path: '',
    component: EstimateDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimateDetailsPageRoutingModule {}
