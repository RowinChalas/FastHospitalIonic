import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPacientePageRoutingModule } from './agregar-paciente-routing.module';

import { AgregarPacientePage } from './agregar-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AgregarPacientePageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [AgregarPacientePage]
})
export class AgregarPacientePageModule {}
