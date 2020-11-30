import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, PopoverController } from '@ionic/angular';
import { PopoverCerrarSesionComponent } from 'src/app/components/popover-cerrar-sesion/popover-cerrar-sesion.component';
import { ConsultaService } from 'src/app/services/consulta.service';
import { FuncioensService } from 'src/app/services/funcioens.service';
import { ModalConsultaCrearPage } from '../modal-consulta-crear/modal-consulta-crear.page';
import { ModalConsultasPage } from '../modal-consultas/modal-consultas.page';
import { ReportesPage } from '../reportes/reportes.page';

@Component({
  selector: 'app-home-fast',
  templateUrl: './home-fast.page.html',
  styleUrls: ['./home-fast.page.scss'],
})
export class HomeFastPage implements OnInit {

  pacientes:ApiPaciente[]= JSON.parse(localStorage.pacientes)
  consultaFecha:cFecha[]=[]
  reporteZodiacal:zodiaco[]=[]
  cantidadConsultasPacientes:cantidadConsulta[]=[]

  //recetear como null cuando esta disponible el filtrado
  buscador:string =''
  aplicarFiltro=false

  user:user={
    name:'',
    email:'',
    sexo:'Masculino'
  };
  slidesOptions={ slidesPerView:1.2 }

  name:string =''
  constructor(private  navController:NavController,
              private menuController:MenuController,  
              private modalConsultaController:ModalController,
              private consultaService:ConsultaService,
              private funcionesService:FuncioensService,
              private popoverController:PopoverController) {
               //this.user.name = sessionStorage.getItem("name",)
               //this.user.sexo = sessionStorage.getItem("sexo",)
               //this.user.email = sessionStorage.getItem("email",)

               this.user.name = localStorage.getItem("name");
               this.user.email = localStorage.getItem("email");
               this.user.sexo = localStorage.getItem("sexo")
              
               }

  ngOnInit() {
  // console.log(this.consultaFecha);
    this.CargarReporteZodiacal()
    this.cargarCantidadConsultas()
  }
  

  cargarCantidadConsultas(){
    this.consultaService.cantidadConsulta(localStorage.id)
    .subscribe(d=>{
      let data =d
      this.cantidadConsultasPacientes = data
    })
  }

  async onWelcomeFastH(){
    const modalConsultas = await this.modalConsultaController.create({
      component:ModalConsultasPage,
      componentProps:{
        ok:2 //usar pasa saver si mostrar consulta de un solo paciente -- emplear despues
      }
    })
    await modalConsultas.present();

  }

  onMenu(){
    this.menuController.toggle();
  }


  abrirModalConsulta(){
//console.log("funciona");
  }

  cambairFecha(){
    this.consultaService.consultaPorFecha(this.funcionesService.fechaStrringDMY(this.buscador),localStorage.id)
    .subscribe(d=>{
      let data = d;
      this.consultaFecha = data
//console.log(this.consultaFecha);
    })
  }

  CargarReporteZodiacal(){  
    this.consultaService.reporteZodiacal(localStorage.id)
    .subscribe(d=>{
      let data =d
      this.reporteZodiacal=data
    
    })
  }

  async modalMostrarConsultas(paciente){
    const modalConsultas = await this.modalConsultaController.create({
      component:ModalConsultasPage,
      componentProps:{
        paciente:paciente,
        ok:2 //usar pasa saver si mostrar consulta de un solo paciente -- emplear despues
      }
    })
    await modalConsultas.present();

  }

  async modalAgregarConsulta(paciente){
    const modalConsultas = await this.modalConsultaController.create({
      component:ReportesPage,
      componentProps:{
        paciente:paciente,
        ok:2 //usar pasa saver si mostrar consulta de un solo paciente -- emplear despues
      }
    })
    await modalConsultas.present();

  }
  async cantidadConsulta(paciente:ApiPaciente){
    setTimeout(p=>{
    //  console.log("hello");
    },1000)
  }

  porgresBar(paciente:number,cantidad:number):number{
    //console.log(cantidad/paciente);
    return cantidad / paciente
  }
  async onSobreFastHospital(){
    this.navController.navigateForward('/sobre-fastapi')
    this.menuController.close()

  }

  onAgregarPaciente(){
    this.navController.navigateForward('/agregar-paciente')
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
}

interface user{
  name:string,
  sexo:String
  email:string
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

interface cFecha
  {
    "Paciente": string,
    "Fecha": string,
    "Motivo_Consulta": string,
    "Numero_Seguro": string,
    "Monto_Pagado": string,
    "Diagnostico": string,
    "Nota": string
  }

  interface zodiaco{
    "Cedula": number,
    "Nombre": string,
    "Apellido": string,
    "Zodiaco": string
  }
interface cantidadConsulta{
  "Cedula": number,
  "Nombre": string,
  "Apellido": string,
  "Email": string,
  "Cantidad": 1
}