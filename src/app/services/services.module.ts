import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService } from './doctor.service';
import { PacienteService } from './paciente.service';
import { FuncioensService } from './funcioens.service';
import { ConsultaService } from './consulta.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    DoctorService,
    PacienteService,
    FuncioensService,
    ConsultaService
  ]
})
export class ServicesModule { }
