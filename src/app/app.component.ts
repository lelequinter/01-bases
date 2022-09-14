import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Contador App';
  counter: number = 10;

  // increment = (): number => this.counter += 1;
  // decrement = (): number => this.counter -= 1;
  acumular = (valor: number): number => this.counter += valor;
  // decrement():number{
  //   return this.counter -= 1;
  // }
}
