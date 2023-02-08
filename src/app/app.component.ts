import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
