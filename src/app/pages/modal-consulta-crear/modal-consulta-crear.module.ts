import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalConsultaCrearPageRoutingModule } from './modal-consulta-crear-routing.module';

import { ModalConsultaCrearPage } from './modal-consulta-crear.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ModalConsultaCrearPageRoutingModule,
  ],
  declarations: [ModalConsultaCrearPage]
})
export class ModalConsultaCrearPageModule {}
