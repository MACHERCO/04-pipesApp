import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor(private primeNGConfig : PrimeNGConfig){

  }

  ngOnInit() {

    this.primeNGConfig.ripple = true;
  }


  nombre: string = 'MiGuel AngeL chERcoLes';
  valor : number = 3251
  obj = {
      nombre: 'Miguel Angel'
  }

  mostrarNombre (){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);

  }


}
