import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

    personajes: Personaje[] = [
      {
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegetta',
        poder: 12000
      }
    ]

  nuevo: Personaje = {
    nombre: 'Leyder',
    poder: 12322
  }

  // agregar() {
  //   if (this.nuevo.nombre.trim().length === 0) {
  //     return;
  //   }

  //   this.personajes.push(this.nuevo);
  //   // console.log(this.nuevo);
  //   this.clear();
  //   // event.preventDefault();
  // }

  // clear(): void {
  //   // this.nuevo.nombre = ''
  //   // this.nuevo.poder = 0
  //   this.nuevo = {
  //     nombre: '',
  //     poder: 0
  //   }
  // }
}
