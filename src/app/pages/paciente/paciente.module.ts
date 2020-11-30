import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaPageRoutingModule } from './paciente-routing.module';

import { PacientePage } from './paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaPageRoutingModule
  ],
  declarations: [PacientePage]
})
export class ConsultaPageModule {
  
}
