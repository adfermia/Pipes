import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Adrian';
  nombre2 = ' adRian ferNandez miñAna xd';
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

  PI = Math.PI;
  a = 0.234;

  salario = 1554.36;

  heroe = {
    nombre: 'Wolverine',
    clave: 'Logan',
    edad: 500,
    direccion: {
      calle: 'Piruleta',
      numero: '19'

    }
  };

  valorDePromesa = new Promise( ( resolve, reject) => {
    setTimeout( () => resolve('Llego la data!'), 3500);
  });
  fecha = new Date();
  video = 'o9ryZEe4-VM';
  activar = true;
}
