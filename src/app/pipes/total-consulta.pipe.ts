import { Pipe, PipeTransform } from '@angular/core';
import { ConsultaService } from '../services/consulta.service';

@Pipe({
  name: 'totalConsulta'
})
export class TotalConsultaPipe implements PipeTransform {
  constructor(private consultaService:ConsultaService){}
  
  
  transform(idPaciente: number):any {
    let cantidad=0

    
    this.consultaService.consultaPaciente(idPaciente)
    .subscribe(d=>{
      if(d.respuesta!="El paciente no tiene citas generadas")
      return cantidad = d.length
     else
     return 0

    })

  }

}
