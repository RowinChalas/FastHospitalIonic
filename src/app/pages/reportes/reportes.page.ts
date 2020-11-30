import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ConsultaService } from 'src/app/services/consulta.service';
import { FuncioensService } from 'src/app/services/funcioens.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {
  consultaFecha:cFecha[]=[]
  buscador:string =''
  reporteZodiacal:zodiaco[]=[]
  cantidadConsultasPacientes:cantidadConsulta[]=[]

  slidesOptions={ slidesPerView:1 }

  constructor(private  navController:NavController,
    private menuController:MenuController,  
    private modalConsultaController:ModalController,
    private consultaService:ConsultaService,
    private funcionesService:FuncioensService) { }

  ngOnInit() {
    this.CargarReporteZodiacal()
    this.cargarCantidadConsultas()
  }

  onBackReload(){
    this.modalConsultaController.dismiss()
  }

  
  cargarCantidadConsultas(){
    this.consultaService.cantidadConsulta(localStorage.id)
    .subscribe(d=>{
    //  console.log(d);
      let data =d
      this.cantidadConsultasPacientes = data
    })
  }
  
  cambairFecha(){

    let ele =document.getElementById("load_loading").style.visibility="visible"
    setTimeout(() => {
      document.getElementById("load_loading").style.visibility="hidden"
    }, 1200);


    this.consultaService.consultaPorFecha(this.funcionesService.fechaStrringDMY(this.buscador),localStorage.id)
    .subscribe(d=>{
      let data = d;
      this.consultaFecha = data  
  })

}

  CargarReporteZodiacal(){  
    this.consultaService.reporteZodiacal(localStorage.id)
    .subscribe(d=>{
     // console.log(d);
      this.reporteZodiacal = d
    // el extra

  })

  }

}

Apellido: "other"
Cedula: 45678925374
Nombre: "Marian"
Zodiaco: "Capricornio"

interface cFecha
  {
    "Paciente": string,
    "Fecha": string,
    "Motivo_Consulta": string,
    "Numero_Seguro": string,
    "Monto_Pagado": string,
    "Diagnostico": string,
    "Nota": string,
    "Foto":string
  }

  interface zodiaco{
    "Cedula": number,
    "Nombre": string,
    "Apellido": string,
    "Zodiaco": string,
    "Foto":string
  }
interface cantidadConsulta{
  "Cedula": number,
  "Nombre": string,
  "Apellido": string,
  "Email": string,
  "Cantidad": 1,
  "Foto":string
}
