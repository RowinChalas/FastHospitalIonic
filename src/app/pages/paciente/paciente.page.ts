import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { PopoverMensajesComponent } from 'src/app/components/popover-mensajes/popover-mensajes.component';
import { ModalConsultaCrearPage } from '../modal-consulta-crear/modal-consulta-crear.page';
import { ModalConsultasPage } from '../modal-consultas/modal-consultas.page';
import { ModalEditartPacientePage } from '../modal-editart-paciente/modal-editart-paciente.page';
@Component({
  selector: 'app-consulta',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

  currentImage:String;
  pacientes:ApiPaciente[]= JSON.parse(localStorage.pacientes)
  

  constructor(private actionSheetController:ActionSheetController,
    private modalController:ModalController,
    private popoverController:PopoverController,
    ) {
                this.presentPopover()
                //this.cargarPcientes()
                //this.presentPopover()
              }

  ngOnInit() {
  }


  async presentPopover(){

    if(this.pacientes.length==0){
    const t = this.popoverController.create({
      component:PopoverMensajesComponent,
      id:'popoverCerrar',
      componentProps:{
        titulo:"No tienes Pacientes",
        mensaje:"En esta ventana se mostrar los pacientes Registrados",
        buttonText:"OK",
        imgSrc:'./assets/doctor-protection.svg'
      }
    })
    await (await t).present();
  }

  }
  // camera


   

  async onPaciente(paciente,indice) {
   // console.log(paciente);
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      id:'sheetGestionP',
      buttons: [{
        cssClass:'btnMostrar',
        text: 'Mostrar Consultas',
        icon: 'eye-outline',
        handler: () => {
         this.modalMostrarConsultas(paciente);
        }
      }, {
        
        cssClass:'btnEditar',
        text:"Editar Paciente",
        icon: 'create-outline',
        handler: () => {
          this.modalEditarPaciente(paciente,indice);
        }
      },
        {
          cssClass:'btnagregarConsulta',
          text:"Agregar Consulta",
          icon: 'add-circle-outline',
          handler: () => {
            this.modalAgregarConsulta(paciente);
          }
        
      }, {
        cssClass:'btnCancel',
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  

async modalAgregarConsulta(paciente:ApiPaciente){
  const modalAgregar = await this.modalController.create({
    component:ModalConsultaCrearPage,
    componentProps:{
      ok:1,
      idPaciente:paciente.idPaciente,
      NombrePaciente: paciente.NombrePaciente
    }
  })

  await modalAgregar.present();
}
  async modalEditarPaciente(paciente:ApiPaciente,indice:number){
   
    const modalEditarPaciente = await this.modalController.create({
      component:ModalEditartPacientePage,
      componentProps:{
        AlergiasPaciente: paciente.AlergiasPaciente,
        ApellidoPaciente: paciente.ApellidoPaciente,
        CedulaPaciente: paciente.CedulaPaciente,
        "Datos del doctor": paciente['Datos del doctor'],
        "Datos del paciente": paciente['Datos del paciente'],
        EmailPaciente: paciente.EmailPaciente,
        Fecha_NacimientoPaciente: paciente.Fecha_NacimientoPaciente,
        Foto: paciente.Foto,
        Nombre: paciente.Nombre,
        NombrePaciente: paciente.NombrePaciente,
        Sexo: paciente.Sexo,
        SexoPaciente: paciente.SexoPaciente,
        Tipo_SangrePaciente: paciente.Tipo_SangrePaciente,
        Zodiaco: paciente.Zodiaco,
        doctor: paciente.doctor,
        idPaciente: paciente.idPaciente,
        indice:indice
      }
    })
    await modalEditarPaciente.present();
  }
  async modalMostrarConsultas(paciente:string){


    const modalConsultas = await this.modalController.create({
      component:ModalConsultasPage,
      componentProps:{
        paciente:paciente,
        ok:1 //usar pasa saver si mostrar consulta de un solo paciente -- emplear despues
      }
    })
    await modalConsultas.present();

  }



  

}

interface Paciente{
  idPaciente:number
  idDoctor:number
  cedula:string
  img:string
  name:string
  apellido:string
  tipoSanger:string
  email:string
  sexo:string
  fechaNacimiento:string
  alergias:string
  signoZodiacal:string
}

interface ApiPaciente{
  AlergiasPaciente: string
ApellidoPaciente: string
CedulaPaciente: number
"Datos del doctor": true
"Datos del paciente": true
EmailPaciente: "pedro@gmail.com"
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
