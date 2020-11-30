import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { PopoverMensajesComponent } from 'src/app/components/popover-mensajes/popover-mensajes.component';
import { DoctorService } from 'src/app/services/doctor.service';
import { FuncioensService } from 'src/app/services/funcioens.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  obserbable:Observable<any>;

  userRegistro:userRegistro={
    email:'',
    password:'',
    sexo:'Masculino',
    name:''
  }
  constructor(private navController:NavController,private doctorService:DoctorService,private  popoverController:PopoverController
              ,private alertController:AlertController,private funcionesServices:FuncioensService) { }

  ngOnInit() {
    this.doctorService.getRoot()
  }

  onInicarSesion(){
    this.navController.navigateForward('/inicio-sesion')
  }

  async onRegistrar(){
    
    if(this.userRegistro.name!='' && this.userRegistro.email!='' &&this.userRegistro.password!=''){

      this.obserbable =this.doctorService.registrarDoctor(this.userRegistro)
      this.obserbable.subscribe(d=>{
        let data = d;
        if(data.Ok){
          
          this.userRegistro.name=''
          this.userRegistro.email=''
          this.userRegistro.password=''
          this.presentPopover()
        }else{
          this.funcionesServices.presentActinSheetIncorrecto("Usuario ya Existe")
        }
        //  console.log(data);
      })
    }else{
      this.alertError()

    }
  }
  

  async presentPopover(){

    const t = this.popoverController.create({
      component:PopoverMensajesComponent,
      id:'popoverCerrar',
      componentProps:{
        titulo:"Registro Exitoso",
        mensaje:"Doctor registrado exitosaamente",
        buttonText:"OK",
        imgSrc:'./assets/doctor-protection.svg'
      }
    })
    await (await t).present();
  

  }
  
  establecerSexo(event){
  //  console.log(event.detail.value);
  }



    async alertError(){
      const alertVentana = await this.alertController.create({
      header:"Completar Los campos",
      cssClass:'alert-error',
      
      buttons:[
        'ok'
        
      ]
      
    })
    await alertVentana.present();
  }

  async alertSuccess(){
    const alertVentana = await this.alertController.create({
    header:"Doctor Registrado ",
    subHeader:'Exitosamente',
    cssClass:'alert-success',
    
    buttons:[
      'ok'
      
    ]
    
  })
  await alertVentana.present();
}
}
interface userRegistro{
  email:string,
  password:string
  name:string
  sexo:string

}