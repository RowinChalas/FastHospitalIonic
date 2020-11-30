import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http:HttpClient) { }


  agregarPaciente(paciente:ApiPaciente){
                                //https://finalapis.herokuapp.com/api/Pacientes/4/12345678/%27%27/Ramon/Perez/nose/este%40email.com/Masculino/01-01-2001/Pastilla/Libra
    return this.http.post<any>(`https://finalapis.herokuapp.com/api/Pacientes/${paciente.doctor}/${paciente.CedulaPaciente}/${paciente.NombrePaciente}/${paciente.ApellidoPaciente}/${paciente.Tipo_SangrePaciente}/${paciente.EmailPaciente}/${paciente.SexoPaciente}/${paciente.Fecha_NacimientoPaciente}/${paciente.AlergiasPaciente}/${paciente.Zodiaco}`,{"foto":`${paciente.Foto}`})
  }


  actualizarPaciente(paciente:ApiPaciente){
    return this.http.put<any>(`https://finalapis.herokuapp.com/api/ActualizarPaciente/${paciente.idPaciente}/${paciente.CedulaPaciente}/${paciente.NombrePaciente}/${paciente.ApellidoPaciente}/${paciente.Tipo_SangrePaciente}/${paciente.EmailPaciente}/${paciente.SexoPaciente}/${paciente.Fecha_NacimientoPaciente}/${paciente.AlergiasPaciente}/${paciente.Zodiaco}`,{foto:`${paciente.Foto}`})
  
  }
  
}
  interface Paciente{
  idPaciente:number,
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