import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalConsultasPage } from './modal-consultas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalConsultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalConsultasPageRoutingModule {}
