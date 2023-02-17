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

  clientes : string [] = ['Miguel','Juan','Carolina','Pilar','Jose','Ana'];

  /* Creamos un objeto para el MAPPING del Pipe */

  clientesMapa = {

    '=0': 'no hay ningun cliente esperando.',
    '=1': 'tenemos 1  cliente esperando.',
    'other': 'tenemos # clientes esperando.'

  }

  cambiarCliente (){

    this.nombre = 'Pilar';
    this.genero = 'femenino'

  }

  borrarCliente (){

    this.clientes.pop();

  }

  //keyValue Pipe

  //creamos un objeto

   persona = {
      nombre : 'Miguel Ángel',
      edad : 35,
      direccion : 'Aranjuez, Madrid'

  }



}

