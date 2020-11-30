import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFastPage } from './home-fast.page';

const routes: Routes = [
  {
    path: '',
    component: HomeFastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeFastPageRoutingModule {}
