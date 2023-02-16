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

  clientes : string [] = [];

  /* Creamos un objeto para el MAPPING del Pipe */

  clientesMapa = {

    '=0': 'No hay ningun cliente esperando.',
    '=1': '1  cliente esperando.',
    'other': '# clientes esperando.'

  }

  cambiarCliente (){

    this.nombre = 'Pilar';
    this.genero = 'femenino'

  }



}

