import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabPageRoutingModule } from './fab-routing.module';

import { FabPage } from './fab.page';
import { ComponentesModule } from '../../components/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FabPage]
})
export class FabPageModule {}
