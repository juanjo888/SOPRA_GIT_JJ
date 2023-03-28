import { Component } from '@angular/core';
import { PRODUCTOS } from '../datos/datos';
import { Producto } from '../tipos/tipos.ts/tipos';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

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

  borrar(id: number) {
    // for (let i = 0; i < this.productos.length; i++) {
    //   if (index === this.productos[i].id) {
    //     this.productFilter.splice(i, 1);
    //     this.productSelec = this.productos[0];
    //   }
    // }

    this.productFilter.splice(
      this.productos.findIndex((producto) => {
        producto.id === id;
      }),
      1
    );
    this.productSelec = this.productos[0];
  }

  infoModal(info: any) {
    this.data = info;
  }

}


// Borrar(index: number){
//   this.productFilter.splice(this.indexSelected, 1);
// }



// private Borrar()
// this.productFilter = this.productos.length !== ? this.productos[0]
