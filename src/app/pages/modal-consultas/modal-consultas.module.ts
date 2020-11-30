import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalConsultasPageRoutingModule } from './modal-consultas-routing.module';

import { ModalConsultasPage } from './modal-consultas.page';
import { PipesModule } from '../../pipes/pipes.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalConsultasPageRoutingModule,
    PipesModule
  ],
  declarations: [ModalConsultasPage]
})
export class ModalConsultasPageModule {}
