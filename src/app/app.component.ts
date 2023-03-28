import { Component } from '@angular/core';
import { PRODUCTOS } from './datos/datos';
import { Producto } from './tipos/tipos.ts/tipos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProyectoInicial';

  data = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };

  productos = PRODUCTOS;

  productSelec = this.productos[0];
  productFilter = this.productos;
  filtro: string = '';
  filtro2: number = 0;

  starCol = Array(5).fill(true);
}
