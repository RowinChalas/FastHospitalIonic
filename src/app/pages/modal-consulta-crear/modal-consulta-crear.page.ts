import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { Camera,CameraOptions } from '@ionic-native/camera/ngx'
import { ConsultaService } from 'src/app/services/consulta.service';
import { FuncioensService } from 'src/app/services/funcioens.service';

@Component({
  selector: 'app-modal-consulta-crear',
  templateUrl: './modal-consulta-crear.page.html',
  styleUrls: ['./modal-consulta-crear.page.scss'],
})
export class ModalConsultaCrearPage implements OnInit {

  currentImage:any= 'assets/formulario.svg';

  @Input() idPaciente
  @Input() NombrePaciente


  consulta:Consulta={
    idConsulta:0,
    idPaciente:null,
    idDoctor:localStorage.id,
    Paciente:'',
    fechaConsulta:'01-01-2020',
    motivoConsulta:'',
    numeroSeguro:null,
    montoPagado:null,
    diagnostico:'',
    nota:'',
    fotoConsulta:'null' //temporal
  };

  fecha:any = '02-02-2020'

  constructor(private modalController:ModalController,
              private camera:Camera,
              private navController:NavController,
              private consultaService:ConsultaService,
              private funcionServices:FuncioensService) {

                
              }


  ngOnInit() {
    this.consulta.idPaciente = this.idPaciente
    this.consulta.Paciente = this.NombrePaciente
    console.log(this.consulta);

  }


  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }

  galeryPicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
     console.log("Camera issue:" + err);
    });
  }



    //usar para envair a api
    fechaStrring(fecha:string):string{
     
       //console.log(fecha);
       let newFecha= fecha.substring(8,10)+'-'+fecha.substring(5,7)+'-'+fecha.substring(0,4)
       return newFecha
     }


     guardarConsulta(consulta:Consulta){
      //es de prueba 
      consulta.fotoConsulta = this.currentImage

      if(consulta.fotoConsulta ==undefined)
        consulta.fotoConsulta = 'assets/formulario.svg'
      
      if(consulta.fechaConsulta!='01-01-2020')
      this.consulta.fechaConsulta = this.funcionServices.fechaStrringDMY(consulta.fechaConsulta)
      else
      this.consulta.fechaConsulta = consulta.fechaConsulta

      if(consulta.Paciente!=''&&consulta.diagnostico!=''&&consulta.idPaciente!=null&&consulta.montoPagado!=null&&consulta.nota!=''&&consulta.numeroSeguro!=null){
        this.consultaService.agregarConsulta(consulta).subscribe(d=>{
          let data =d
          if(data.respuesta =="Los datos fueros registrados exitosamente"){
            this.funcionServices.presentActinSheetCorrecto("Consulta Agregada")
            this.modalController.dismiss()
          }else{
            this.funcionServices.presentActinSheetIncorrecto("Consulta No Agregada")
          }
        })
      }else{
        this.funcionServices.presentActinSheetIncorrecto("Completar Campos")
      }
       console.log(consulta);
     }


     atras(){
      this.navController.navigateForward('/consulta')
      this.modalController.dismiss();
     }
}

interface Consulta{
  idConsulta:number
  idPaciente:number
  idDoctor:number
  Paciente:string
  fechaConsulta:string
  motivoConsulta:string
  numeroSeguro:number
  montoPagado:number
  diagnostico:string
  nota:string
  fotoConsulta:string
}
