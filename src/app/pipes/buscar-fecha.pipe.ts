import { Pipe, PipeTransform } from '@angular/core';
import { FuncioensService } from '../services/funcioens.service';

@Pipe({
  name: 'buscarFecha'
})
export class BuscarFechaPipe implements PipeTransform {

  constructor(private funcionesService:FuncioensService){}

  transform(array:Consulta[],filt:string,filtrar:boolean,columna:String): any[] {
    
    if(filtrar){

      let filtro:string=''
      for(let letra of filt){
        if(letra=='/')
        filtro += '-'
        else
        filtro += letra
      }
      if(filtro==''){return array;}
      filtro = this.funcionesService.fechaStrringDMY(filtro)
      
      return array.filter(item=>{
        return item[columna+''].includes(filtro)
      })
    }

    return array

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
}