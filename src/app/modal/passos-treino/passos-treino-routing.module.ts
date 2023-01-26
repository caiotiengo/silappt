import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassosTreinoPage } from './passos-treino.page';

const routes: Routes = [
  {
    path: '',
    component: PassosTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassosTreinoPageRoutingModule {}
