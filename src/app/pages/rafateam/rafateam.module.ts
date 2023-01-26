import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RafateamPageRoutingModule } from './rafateam-routing.module';

import { RafateamPage } from './rafateam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RafateamPageRoutingModule
  ],
  declarations: [RafateamPage]
})
export class RafateamPageModule {}
