import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

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

  agregarNuevoPersonaje(arg: Personaje){
    // console.log(arg);
    this.personajes.push(arg);
  }

  constructor(public readonly dbzSvc: DbzService ){}

}
