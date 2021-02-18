import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReorderPageRoutingModule } from './list-reorder-routing.module';

import { ListReorderPage } from './list-reorder.page';
import { ComponentesModule } from '../../components/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReorderPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ListReorderPage]
})
export class ListReorderPageModule {}
