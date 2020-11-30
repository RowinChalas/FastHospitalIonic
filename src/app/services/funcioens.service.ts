import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { DoctorService } from './doctor.service';

@Injectable({
  providedIn: 'root'
})
export class FuncioensService {

  constructor(private actionSheetController:ActionSheetController
              ,private serviceDoctor:DoctorService) { }

  async presentActinSheetCorrecto(mensaje:string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estado',
      //mode:"ios",
      cssClass: 'my-custom-class',
      buttons: [{
        cssClass:'succes',
        text: mensaje,
        role: 'destructive',
        icon: 'checkmark-circle-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();
  }

    async presentActinSheetIncorrecto(mensaje:string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Estado',
      cssClass: 'rojo',
      buttons: [{
        cssClass:'mi-button-danger',
        text: mensaje,
        role: 'destructive',
        icon: 'alert-circle-outline',
        handler: () => {
          console.log('Delete clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  actualizarLocalStorage(paciente:any){
    
    let miListaPaciente = JSON.parse(localStorage.getItem("pacientes"))
    miListaPaciente.push(paciente)
    localStorage.setItem("pacientes",JSON.stringify(miListaPaciente)) 

  }


  cargarStorage(data){

    localStorage.setItem("name",data.Nombre)
    localStorage.setItem("id",data.id)
    localStorage.setItem("pacientes",JSON.stringify(data.pacientes))
    //cargar sexo cuando yunior lo tenga disponible
    localStorage.setItem("sexo","Masculino")

}

//usar oara enviar fecha al api (Castin) dd-mm-yyy
  fechaStrringDMY(fecha){
     return fecha.substring(8,10)+'-'+fecha.substring(5,7)+'-'+fecha.substring(0,4)
   }

   fechaStringYMD(fecha){
    return fecha.substring(6,10)+"-"+fecha.substring(3,5)+"-"+fecha.substring(0,2)
   }
}
