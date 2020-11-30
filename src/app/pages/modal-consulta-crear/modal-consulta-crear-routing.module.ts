import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalConsultaCrearPage } from './modal-consulta-crear.page';

const routes: Routes = [
  {
    path: '',
    component: ModalConsultaCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalConsultaCrearPageRoutingModule {}
