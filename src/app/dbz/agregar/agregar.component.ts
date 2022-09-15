import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = [];
  @Input() nuevo!: Personaje;

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.personajes.push(this.nuevo);
    // console.log(this.nuevo);
    this.clear();
    // event.preventDefault();
  }

  clear(): void {
    // this.nuevo.nombre = ''
    // this.nuevo.poder = 0
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
