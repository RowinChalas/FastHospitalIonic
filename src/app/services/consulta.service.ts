import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http:HttpClient) { }


  agregarConsulta(consulta:Consulta){
    return this.http.post<any>(`https://finalapis.herokuapp.com/api/Consulta/${consulta.idPaciente}/${consulta.idDoctor}/${consulta.Paciente}/${consulta.fechaConsulta}/${consulta.motivoConsulta}/${consulta.numeroSeguro}/${consulta.montoPagado+''}/${consulta.diagnostico}/${consulta.nota}`,{foto:`${consulta.fotoConsulta}`})
  }

  cargarConsulta(id:number){
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/SeleccionarConsulta/${id}`)
  }

  actualizarConsultas(consulta:Consulta2){
   return this.http.put<any>(`https://finalapis.herokuapp.com/api/ActualizarConsulta/${consulta.idConsulta}/${consulta.Paciente}/${consulta.fecha}/${consulta.motivoConsulta}/${consulta.numeroSeguro}/${consulta.diagnostico}/${consulta.montoPagado}/${consulta.nota}`,{foto:`${consulta.evidencia}`})
  }

  consultaPaciente(idPaciente:number){
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/SeleccionarConsulta/${idPaciente}`)
  }

  consultaPorFecha(fecha:string ,idDoctor:number){
    console.log("cuando yunior acutalize agrega el id.... por eso el error");
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/fecha/${fecha}/{id}?idDoctor=${idDoctor}`)
  }

  reporteZodiacal(idDoctor:number){
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/zodiaco/${idDoctor}`)
  }

  cantidadConsulta(idDoctor:number){
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/idDoctor/${idDoctor}`)
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
}

interface Consulta2{
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
