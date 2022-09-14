import { Component } from '@angular/core'
@Component({
  selector: 'app-contador',
  template: `
  <h1>{{titulo}}</h1>
<h3>La base es: <strong>{{base}}</strong></h3>
<button (click)="acumular(-base)" > -{{base}} </button>
<span (click)="counter = 0" >{{counter}}</span>
<button (click)="acumular(base)" > +{{base}} </button>
  `
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  counter: number = 10;
  base: number = 5;

  // increment = (): number => this.counter += 1;
  // decrement = (): number => this.counter -= 1;
  acumular = (valor: number): number => this.counter += valor;
  // decrement():number{
  //   return this.counter -= 1;
  // }
}
