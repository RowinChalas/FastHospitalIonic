import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaDMYPipe } from './fecha-dmy.pipe';
import { BuscarFechaPipe } from './buscar-fecha.pipe';
import { TotalConsultaPipe } from './total-consulta.pipe';


@NgModule({
  declarations: [FechaDMYPipe,BuscarFechaPipe,TotalConsultaPipe],
  imports: [
    CommonModule
  ],
  exports:[FechaDMYPipe,BuscarFechaPipe,TotalConsultaPipe]
})
export class PipesModule { }
