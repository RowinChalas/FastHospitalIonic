import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditartPacientePage } from './modal-editart-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditartPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditartPacientePageRoutingModule {}
