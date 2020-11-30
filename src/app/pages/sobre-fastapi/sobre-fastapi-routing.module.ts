import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobreFastapiPage } from './sobre-fastapi.page';

const routes: Routes = [
  {
    path: '',
    component: SobreFastapiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobreFastapiPageRoutingModule {}
