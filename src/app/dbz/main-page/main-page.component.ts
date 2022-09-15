import { Component } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

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

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // console.log(this.nuevo);

    this.personajes.push(this.nuevo);
    this.clear();
    // event.preventDefault();
  }

  clear(): void {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}