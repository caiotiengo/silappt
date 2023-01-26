import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RafateamPage } from './rafateam.page';

const routes: Routes = [
  {
    path: '',
    component: RafateamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RafateamPageRoutingModule {}
