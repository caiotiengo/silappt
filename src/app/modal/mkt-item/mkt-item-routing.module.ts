import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MktItemPage } from './mkt-item.page';

const routes: Routes = [
  {
    path: '',
    component: MktItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MktItemPageRoutingModule {}
