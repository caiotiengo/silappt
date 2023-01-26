import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassosTreinoPageRoutingModule } from './passos-treino-routing.module';

import { PassosTreinoPage } from './passos-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassosTreinoPageRoutingModule
  ],
  declarations: [PassosTreinoPage]
})
export class PassosTreinoPageModule {}
