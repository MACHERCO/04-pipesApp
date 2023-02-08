import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower : string = 'Miguel Ángel';
  nombreUpper : string = 'MIGUEL ÁNGEL';
  nombrecompleto : string = 'MiGuEL áNgEL';

  fecha : Date = new Date(); // el dia de hoy



}
