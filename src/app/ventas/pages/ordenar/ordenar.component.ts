




import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas : boolean = true;

  heroes : Heroe [] = [

    {
      nombre : "Superman",
      vuela : true,
      color : Color.rojo
    },

    {
      nombre : "Batman",
      vuela : false,
      color : Color.negro
    },

    {
      nombre : "Robin",
      vuela : false,
      color : Color.verde
    },

    {
      nombre : "Dardevil",
      vuela : false,
      color : Color.rojo
    },

    {
      nombre : "Linterna Verde",
      vuela : true,
      color : Color.verde
    },


  ]

  cambiarTipo(): void{

    this.enMayusculas = !this.enMayusculas;

  }

}
