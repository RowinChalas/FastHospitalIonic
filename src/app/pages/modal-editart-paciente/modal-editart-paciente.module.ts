import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditartPacientePageRoutingModule } from './modal-editart-paciente-routing.module';

import { ModalEditartPacientePage } from './modal-editart-paciente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalEditartPacientePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ModalEditartPacientePage]
})
export class ModalEditartPacientePageModule {}
