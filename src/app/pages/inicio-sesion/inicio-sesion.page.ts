import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PopoverMensajesComponent } from 'src/app/components/popover-mensajes/popover-mensajes.component';
import { SobreFastHospitalComponent } from 'src/app/components/sobre-fast-hospital/sobre-fast-hospital.component';

import { DoctorService } from 'src/app/services/doctor.service';
import { SobreFastapiPage } from '../sobre-fastapi/sobre-fastapi.page';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements OnInit {


  obserbable:Observable<any>;

  userLogin:UserLogin={
    email:'',
    password:''
  }

  constructor(private navController:NavController,
              private serviceDoctor:DoctorService,
              private actionsheetController:ActionSheetController,
              private alertController:AlertController,
              private modalController:ModalController,
              private loadingController:LoadingController) { }

  ngOnInit() {
    localStorage.clear()
  }


  onInicioSesion(){
    this.navController.navigateForward('/registro')
  }


  async onWelcomeFastH(){

    
    
    this.loadingController.create({
     message:"Cargando..."
     ,mode:'ios'
   }).then((loading)=>{

     loading.present()
     setTimeout(()=>{
       this.loadingController.dismiss()
     },1500)
   })
    if( this.userLogin.email!='' &&this.userLogin.password!=''){
    this.obserbable = this.serviceDoctor.iniciarSesion(this.userLogin)
    this.obserbable.subscribe(d=>{
      let data =  d;
    
      if(data.Ok==false){
        setTimeout(d=>{   this.alertError('Usuario no valido')        },2000)
     }else{
     this.cargarStorage(data)
     this.userLogin.email='';
     this.userLogin.password='';
     //this.abrirBienvenidaReload()
     this.presentModal()
     setTimeout(()=>{
       this.navController.navigateForward('/home-fast')
     },1000)

   }
    })
  }else{
    this.alertError('Completa los Campos')
  }

}



  cargarStorage(data){

      localStorage.setItem("name",data.Nombre)
      localStorage.setItem("id",data.id)
      localStorage.setItem("email",this.userLogin.email)
      localStorage.setItem("pacientes",JSON.stringify(data.pacientes))
      //cargar sexo cuando yunior lo tenga disponible
      localStorage.setItem("sexo",data.Sexo)
      localStorage.setItem("pss",this.userLogin.password)

  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: SobreFastapiPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  
  }


  async alertError(mensaje){
    const alertVentana = await this.alertController.create({
    header:mensaje,
    cssClass:'alert-error',
    
    buttons:[
      'ok'
      
    ]
    
  })
  await alertVentana.present();
}
}


interface UserLogin{
  email:string,
  password:string
}
