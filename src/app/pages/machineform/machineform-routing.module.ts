import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineformPage } from './machineform.page';

const routes: Routes = [
  {
    path: '',
    component: MachineformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineformPageRoutingModule {}
