import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaDMY'
})
export class FechaDMYPipe implements PipeTransform {

  transform(fecha: string): string {
    return fecha.substring(8,10)+'-'+fecha.substring(5,7)+'-'+fecha.substring(0,4)
  }

}
