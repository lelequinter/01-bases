import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo!: Personaje;
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzSvc: DbzService){}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzSvc.agregarPersonajes(this.nuevo)
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.clear();
  }

  clear(): void {
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
