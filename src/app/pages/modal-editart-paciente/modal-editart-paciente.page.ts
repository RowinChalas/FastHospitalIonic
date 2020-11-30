import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FuncioensService } from 'src/app/services/funcioens.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-modal-editart-paciente',
  templateUrl: './modal-editart-paciente.page.html',
  styleUrls: ['./modal-editart-paciente.page.scss'],
})
export class ModalEditartPacientePage implements OnInit {
 
      @Input()  AlergiasPaciente
      @Input()  ApellidoPaciente
      @Input()  CedulaPaciente
      @Input()  "Datos del doctor"
      @Input()  "Datos del paciente"
      @Input()  EmailPaciente
      @Input()  Fecha_NacimientoPaciente
      @Input()  Foto
      @Input()  Nombre
      @Input()  NombrePaciente
      @Input()  Sexo
      @Input()  SexoPaciente
      @Input()  Tipo_SangrePaciente
      @Input()  Zodiaco
      @Input()  doctor
      @Input()  idPaciente
      @Input()  indice
  
  paciente:ApiPaciente

  
  pacienteU:ApiPaciente;

  fecha:any;
  
  currentImage:any= './assets/diversity_avatar_man_boy_sunglasses_people_icon_159090.svg';
  
  
  
  constructor(
  private modalController:ModalController,
  private camera:Camera,
  private funcionesService:FuncioensService,
  private pacienteService:PacienteService) {
    
    }

  
  ngOnInit() {
    this.paciente={
      AlergiasPaciente: this.AlergiasPaciente,
      ApellidoPaciente: this.ApellidoPaciente,
      CedulaPaciente: this.CedulaPaciente,
      "Datos del doctor": this["Datos del doctor"],
      "Datos del paciente": this["Datos del paciente"],
      EmailPaciente: this.EmailPaciente,
      Fecha_NacimientoPaciente: this.Fecha_NacimientoPaciente,
      Foto: this.Foto,
      Nombre: this.Nombre,
      NombrePaciente: this.NombrePaciente,
      Sexo: this.Sexo,
      SexoPaciente: this.SexoPaciente,
      Tipo_SangrePaciente: this.Tipo_SangrePaciente,
      Zodiaco: this.Zodiaco,
      doctor: this.doctor,
      idPaciente: this.idPaciente
    }

    this.fecha = this.transformarFechaPaciente(this.Fecha_NacimientoPaciente)
    
   
  }






  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation:true,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.paciente.Foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    // console.log("Camera issue:" + err);
    });
  }

    galeryPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType:this.camera.MediaType.PICTURE,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.paciente.Foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    // console.log("Camera issue:" + err);
    });
  }
  //---------------------------------------------------------

  enviarConsulta(){

   // return console.log(this.paciente.Fecha_NacimientoPaciente);
    //console.log(this.paciente);
    this.paciente.Fecha_NacimientoPaciente =this.funcionesService.fechaStrringDMY(this.fecha)
    this.actualizarLocalStoragePaciente()
    if(this.paciente.CedulaPaciente.length==11 && this.paciente.NombrePaciente!=''&&this.paciente.ApellidoPaciente!=''&&this.paciente.Tipo_SangrePaciente!=''&&this.paciente.EmailPaciente.length<10&&this.paciente.Zodiaco!=''&&this.paciente.Sexo!=''&& this.paciente.AlergiasPaciente!=''){
    }
    this.pacienteService.actualizarPaciente(this.paciente)
    .subscribe(d=>{
      let data = d;
     // console.log(data);
      if(data.respuesta=="Los datos fueros actualizados exitosamente"){
        //ahcer un reload para cargar los nuevos datos del paciente
        this.funcionesService.presentActinSheetCorrecto('Paciente Actualizado!')
        
        //this.funcionesService.actualizarLocalStorage();
      }else{
        this.funcionesService.presentActinSheetIncorrecto('Paciente No Actualizado!')
      }
    })

  }  

  actualizarLocalStoragePaciente(){
    let listaPacintes = JSON.parse(localStorage.pacientes)
    listaPacintes.splice(this.indice,1)
    listaPacintes.push(this.paciente)
    localStorage.setItem("pacientes",JSON.stringify(listaPacintes))

   // console.log(listaPacintes)
  }

  cambiarSigno(event){
    this.paciente.Zodiaco= event.detail.value;
  }

  cambioSexo(event){
   // console.log(event.detail.value);
    this.paciente.Sexo = event.detail.value
  }
//usar para envair a api

//usar para enviar a campo datetime
  transformarFechaPaciente(Fecha){
     
    let fecha = Fecha+''
     let newFecha= fecha.substring(6,10)+'-'+fecha.substring(3,5)+'-'+fecha.substring(0,2)
     return newFecha
   }

   atras(){
     window.location.reload()
   }
}
interface ApiPaciente{
AlergiasPaciente: string
ApellidoPaciente: string
CedulaPaciente: string
"Datos del doctor": true
"Datos del paciente": true
EmailPaciente: string
Fecha_NacimientoPaciente: string
Foto: string
Nombre: string
NombrePaciente: string
Sexo: string
SexoPaciente: string
Tipo_SangrePaciente: string
Zodiaco: string
doctor: number
idPaciente: number
}



