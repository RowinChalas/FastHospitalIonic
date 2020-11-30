import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SobreFastapiPageRoutingModule } from './sobre-fastapi-routing.module';

import { SobreFastapiPage } from './sobre-fastapi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SobreFastapiPageRoutingModule
  ],
  declarations: [SobreFastapiPage],
  exports:[SobreFastapiPage]
})
export class SobreFastapiPageModule {}
