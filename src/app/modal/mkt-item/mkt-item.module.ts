import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MktItemPageRoutingModule } from './mkt-item-routing.module';

import { MktItemPage } from './mkt-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MktItemPageRoutingModule
  ],
  declarations: [MktItemPage]
})
export class MktItemPageModule {}
