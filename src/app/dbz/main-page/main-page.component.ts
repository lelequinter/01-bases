import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // personajes: Personaje[] =[];

  constructor(){
    // this.personajes = this.dbzSvc.personajes
  }

  // get personajes(): Personaje[]{
  //   return this.dbzSvc.personajes
  // }


  nuevo: Personaje = {
    nombre: 'Leyder',
    poder: 12322
  }

  // agregarNuevoPersonaje(arg: Personaje){
  //   // console.log(arg);
  //   this.personajes.push(arg);
  // }


}
