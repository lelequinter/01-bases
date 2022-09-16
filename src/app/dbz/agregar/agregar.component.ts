import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo!: Personaje;
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.onNuevoPersonaje.emit(this.nuevo);
    this.clear();
  }

  clear(): void {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
