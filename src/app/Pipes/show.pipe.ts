import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'show'
})
export class ShowPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    if (activar) {
      let salida = '';
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < value.length; i++) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
