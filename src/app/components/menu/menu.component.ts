import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, MenuController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { ModalConsultaCrearPage } from 'src/app/pages/modal-consulta-crear/modal-consulta-crear.page';
import { ModalConsultasPage } from 'src/app/pages/modal-consultas/modal-consultas.page';
import { ReportesPage } from 'src/app/pages/reportes/reportes.page';
import { PopoverCerrarSesionComponent } from '../popover-cerrar-sesion/popover-cerrar-sesion.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() name:string ;
  @Input() email:string;
  @Input() sexo:string;

  constructor(private modalController:ModalController
              ,private menuController:MenuController,
              private navController:NavController,
              private actionSheetController:ActionSheetController,
              private popoverController:PopoverController
              ) {

   }
  ngOnInit() {}
  onClick(){
    this.navController.navigateForward('/welcome')
  }


  async modalAgregarConsulta(){
    const modalAgregar = await this.modalController.create({
      component:ModalConsultaCrearPage,
      componentProps:{
        ok:2
      }
    })
  
    await modalAgregar.present();
    this.menuController.close()
  }
    
  onPaciente(){
    this.navController.navigateForward('/consulta');
    this.menuController.close();
  }
  
    async modalMostrarConsultas(){
      const modalConsultas = await this.modalController.create({
        component:ModalConsultasPage,
        componentProps:{
          ok:2 //usar pasa saver si mostrar consulta de un solo paciente -- emplear despues
        }
      })
      await modalConsultas.present();
      this.menuController.close()
    }

    onAgregarPaciente(){
      this.navController.navigateForward('/agregar-paciente')
      this.menuController.close()
    }

    onPerfil(){
      this.navController.navigateForward('/perfil-doctor')
      this.menuController.close()
    }

    async onSobreFastHospital(){
      this.navController.navigateForward('/sobre-fastapi')
      this.menuController.close()

    }

    async cerrarSesion(){
    
      const ventana = await this.popoverController.create({
        component:PopoverCerrarSesionComponent
        ,cssClass:'bg-popover-cerrar',
        id:"popoverCerrar"
      })
  
      await ventana.present()

      this.menuController.close()
    }
    
    async mostrarReportes(paciente){
      const modalConsultas = await this.modalController.create({
        component:ReportesPage,
        componentProps:{
          paciente:paciente,
          ok:2 //usar pasa saver si mostrar consulta de un solo paciente -- emplear despues
        }
      })
      await modalConsultas.present();
      
      this.menuController.close()
    }


}
