import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes: string[] = ['spiderman', 'ironman', '3Dman', 'Wolverine']
heroeBorrado: string = '';

borrarHeroe(){
   this.heroeBorrado = this.heroes.pop() || '';
}

}
