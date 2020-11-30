import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }


  RegistrarUsuaro(){

  }

  getRoot(){
    this.http.get<any>('https://finalapis.herokuapp.com/').
    subscribe(d=>{
      console.log(d);
    })
  }

  registrarDoctor(user:userRegistro){
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/crear/${user.name}/${user.email}/${user.password}/${user.sexo}`)
  }

  iniciarSesion(doctor:UserLogin){
   return  this.http.get<any>(`https://finalapis.herokuapp.com/api/iniciar/${doctor.email}/${doctor.password}`)
  }

  editarUsuairo(doctor:updateDato){
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/modificar/${doctor.name}/${doctor.email}/${doctor.token}`)
  }

  editarPassword(doctor:userPassword){
    return this.http.get<any>(`https://finalapis.herokuapp.com/api/ModClave/${doctor.passwordOld}/${doctor.token}/${doctor.passwordNew}`)
  }

 
}


interface userRegistro{
  email:string,
  password:string
  name:string
  sexo:string

}

interface UserLogin{
  email:string,
  password:string
}
interface userPassword{
  passwordOld:string
  passwordNew:string
  token:string
}
interface updateDato{
  name:string
  email:string
  token:string
}

