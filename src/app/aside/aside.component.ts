import { Component } from '@angular/core';
import { PRODUCTOS } from '../datos/datos';
import { Producto } from '../tipos/tipos.ts/tipos';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {

  productos = PRODUCTOS;

  productSelec = this.productos[0];
  productFilter = this.productos;
  filtro: string = '';
  filtro2: number = 0;

  starCol = Array(5).fill(true);

  buttonClick(producto: Producto) {
    // for (let i = 0; i < this.productos.length; i++) {
    //   if (index == this.productos[i].id) {
    //     this.productSelec = this.productos[i];
    //     console.log(index);
    //   }
    // }
    this.productSelec = producto
    // console.log(this.productSelec)
  }

  // buttonClick(){this.product}

  buscar() {
    this.productFilter = this.productos.filter((producto) => {
      // if (
      //   filtrado.product.toLowerCase().includes(this.filtro.toLowerCase()) ||
      //   filtrado.description.toLowerCase().includes(this.filtro.toLowerCase())
      // ) {
      //   return filtrado;
      // } else {
      //   return null;
      // }
      return (
        producto.product.toLowerCase().includes(this.filtro.toLowerCase()) ||
        producto.description.toLowerCase().includes(this.filtro.toLowerCase())
      );
    });
  }


  mifuncion(): Producto[] {
    return this.productos.filter((prod) => {
      prod.id > 1;
    });
  }

  reset() {
    this.productFilter = this.productos;
    this.filtro = '';
  }

  filter(): void {
    this.productFilter = [];
    for (let i = 0; i < this.productos.length; i++) {
      if (this.filtro2 <= this.productos[i].price) {
        this.productFilter.push(this.productos[i]);
      }
    }
  }


}

// private BuscarYFiltrar(palabra : any)
// return (
//   filtrado.product.toLowerCase().includes(this.filtro.toLowerCase()) ||
//   filtrado.description.toLowerCase().includes(this.filtro.toLowerCase())
// ) {
//   return filtrado;
// } else {
//   return null;
// }
