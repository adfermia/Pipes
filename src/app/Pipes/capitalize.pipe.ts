import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        value = value.toLowerCase();
        // tslint:disable-next-line: prefer-const
        let nombres = value.split(' ');
        if (todas) {
            for (let index = 1; index < nombres.length; index++) {
                nombres[index] = nombres[index][0].toUpperCase() + nombres[index].substr(1);
            }
        } else {
            nombres[1] = nombres[1][0].toUpperCase() + nombres[1].substring(1);
        }
        return nombres.join(' ');
    }
}
