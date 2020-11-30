import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeFastPageRoutingModule } from './home-fast-routing.module';

import { HomeFastPage } from './home-fast.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../../pipes/pipes.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeFastPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [HomeFastPage]
})
export class HomeFastPageModule {}
