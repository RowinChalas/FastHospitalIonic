import { Component, Input, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-cerrar-sesion',
  templateUrl: './popover-cerrar-sesion.component.html',
  styleUrls: ['./popover-cerrar-sesion.component.scss'],
})
export class PopoverCerrarSesionComponent implements OnInit {

  @Input()titulo

  constructor(private navController:NavController,private popoverController:PopoverController) { }

  ngOnInit() {
    //console.log(this.titulo);
  }


  cerrarSesion(){
    
    this.navController.navigateForward('/welcome');
    localStorage.clear();
    this.popoverController.dismiss();
    //window.location.reload()
    
  }
}
