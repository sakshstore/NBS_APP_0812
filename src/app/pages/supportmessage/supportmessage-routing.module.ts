import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportmessagePage } from './supportmessage.page';

const routes: Routes = [
  {
    path: '',
    component: SupportmessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportmessagePageRoutingModule {}
