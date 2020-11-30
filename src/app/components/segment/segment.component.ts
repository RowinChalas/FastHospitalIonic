import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { PopoverCerrarSesionComponent } from '../popover-cerrar-sesion/popover-cerrar-sesion.component';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss'],
})
export class SegmentComponent implements OnInit {

  constructor(private navCOntroller:NavController,
              private popoverController:PopoverController) { }

  ngOnInit() {}


  async cerrarSesion(){
    
    const ventana = await this.popoverController.create({
      component:PopoverCerrarSesionComponent
      ,cssClass:'bg-popover-cerrar',
      id:"popoverCerrar"
    })

    await ventana.present()
  }

  goPerfil(){
    this.navCOntroller.navigateForward('/perfil-doctor')
  }
  
  goPacientes(){
    this.navCOntroller.navigateForward('/consulta')
  }
}
