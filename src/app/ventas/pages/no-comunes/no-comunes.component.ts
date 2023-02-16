import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect

  nombre: string = 'Miguel Ángel';
  genero : string = 'masculino';

  /* Creamos un objeto para el MAPPING del Pipe */

  invitacionMapa = {

    'masculino' : 'invitarlo',

    'femenino' : 'invitarla'

  }

  // i18nPlural

  clientes : string [] = ['Maria'];

  /* Creamos un objeto para el MAPPING del Pipe */

  clientesMapa = {

    '=0 ' : 'No tenemos ningun cliente esperando.',

    'other': 'tenemos # clientes esperando. '

  }

}

