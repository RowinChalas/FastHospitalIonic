import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ConsultaService } from 'src/app/services/consulta.service';
import { FuncioensService } from 'src/app/services/funcioens.service';
import { PopoverMensajesComponent } from '../../components/popover-mensajes/popover-mensajes.component'

@Component({
  selector: 'app-modal-consultas',
  templateUrl: './modal-consultas.page.html',
  styleUrls: ['./modal-consultas.page.scss'],
})
export class ModalConsultasPage implements OnInit {


  @Input() paciente;
  @Input() ok:number;
  nombre:string

  falseButton =false
  bool=false
  titulo:string='Titulo';
  buscador:string =''
  aplicarFiltro=false
//prueba eliminar despeus --abajos
  fecha="02-02-2020"
  consultas:Consulta[]=[];



  constructor(private modalController:ModalController,
              private camera:Camera,
              private consultaService:ConsultaService,
              private funcionesService:FuncioensService,
              private popoverController:PopoverController,
              private loadingController:LoadingController
   ) {

               }

  ngOnInit() {
   // console.log("ok, "+this.ok);
    //this.iniciarPaginaConsulta()//habiliar con un filtro para mostrar las consultas de ese paciente

   // console.log(this.paciente);
   this.nombre =this.paciente.NombrePaciente
    this.cargarConsultas()
  }

  async presentPopover(){

    const t = this.popoverController.create({
      component:PopoverMensajesComponent,
      id:'popoverCerrar',
      componentProps:{
        titulo:"paciente sin Consulta",
        mensaje:"En esta ventana se mostrar Las Consultas",
        buttonText:"OK",
        imgSrc:'./assets/doctor-protection.svg'
      }
    })
    await (await t).present();
 }

 cambiarFecha(event){
   let fecha = this.funcionesService.fechaStrringDMY(event.detail.value)
   this.fecha = fecha
    
 }

  cargarConsultas(){


    this.loadingController.create({
      duration:1000,
      message:"Cargando...",
    
    }).then((loading)=>{
      loading.present()
    
    })
   // console.log();
    this.consultaService.cargarConsulta(this.paciente.idPaciente)
    .subscribe(d=>{
      let data =d
//      this.consultas=[]
     // console.log(d);
        if(data.length>0){
          this.falseButton=false
          this.consultas = data;


         // console.log(this.consultas);



        }else{
          this.presentPopover()
          setTimeout(() => {
            this.modalController.dismiss()
          }, 1500);
        }
    })
  }


  buscar(event){
    //buscar por fecha luego 
    //console.log(this.buscador);
  }

  atras(){
    this.modalController.dismiss();
  }

  
  takePicture(consulta:Consulta) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation:true,
      saveToPhotoAlbum:true
    }
    
    this.camera.getPicture(options).then((imageData) => {
      consulta.evidencia = 'data:image/jpeg;base64,' + imageData;
      

    }, (err) => {
     // Handle error
    // console.log("Camera issue:" + err);
    });
  }


  
  actualizarConsulta(consulta:Consulta){
    //consulta.fecha = this.funcionesService.fechaStrringDMY(this.fecha)
    consulta.Paciente = this.nombre
   // console.log(consulta);
    if(this.fecha!='02-02-2020')
      consulta.fecha = this.fecha
   // console.log(consulta);
    this.consultaService.actualizarConsultas(consulta)
    .subscribe(d=>{
      let data =d;
      if(data.ok){
        console.log(data);
        this.funcionesService.presentActinSheetCorrecto('Consulta Acualizada')
      }
     // console.log("negative", data);
    })
  }

    galeryPicture(consulta:Consulta) {
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
      consulta.evidencia = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    // console.log("Camera issue:" + err);
    });
  }

  //usar para envair a api

 //usar para enviar a campo datetime
  
    fechaStringYMD(fecha){
      return fecha.substring(6,10)+"-"+fecha.substring(3,5)+"-"+fecha.substring(0,2)
     }
  
}
interface Consulta{
  idConsulta:number
  idPaciente:number
  idDoctor:number
  Paciente:string
  fechaConsulta:string
  motivoConsulta:string
  montoPagado:number
  numeroSeguro:number
  diagnostico:string
  nota:string
  fotoConsulta:string
  fecha:string
  evidencia:string
}
