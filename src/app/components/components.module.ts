import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { SegmentComponent } from './segment/segment.component';
import { PopoverMensajesComponent } from './popover-mensajes/popover-mensajes.component';
import { PopoverCerrarSesionComponent } from './popover-cerrar-sesion/popover-cerrar-sesion.component';
import { PopoverEmailNameComponent } from './popover-email-name/popover-email-name.component';



@NgModule({
  declarations: [
    MenuComponent,
    SegmentComponent,
    PopoverMensajesComponent,
    PopoverCerrarSesionComponent,
    PopoverEmailNameComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    MenuComponent,
    SegmentComponent,
    PopoverMensajesComponent,
    PopoverCerrarSesionComponent,
    PopoverEmailNameComponent
  ]
})
export class ComponentsModule { }
