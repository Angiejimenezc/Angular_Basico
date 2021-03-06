import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
