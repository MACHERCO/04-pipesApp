import { Component } from '@angular/core';
import { interval } from 'rxjs';

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


  //Json pipes

    heroes = [
      {
          nombre: 'Superman',
          vuela: true
      },

      {
          nombre: 'Robin',
          vuela: false
      },

      {
        nombre: 'Aquaman',
        vuela: false
    },
    ]


    // async Pipe

    //usarlo con el observable

    miObservable = interval(1000); // 0,1,2,3,4,5 .....


    //usarlo con promesa

    valorPromesa = new Promise((resolve, reject) => {

          setTimeout (()  => {

              resolve('Fin de la promesa, tenemos los datos de la promesa');
          } , 3500  )


    });

}

