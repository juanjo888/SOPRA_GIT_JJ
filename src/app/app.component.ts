import { Component } from '@angular/core';
import { PRODUCTOS } from './datos/datos';
import { Producto, ProductoSimilar } from './tipos/tipos.ts/tipos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProyectoInicial';

  dataModal: ProductoSimilar = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };

  productos = PRODUCTOS;
  productFilter = this.productos;
  productSelec = this.productos[0];
  starCol = Array(5).fill(true);

  filtro: string = '';
  filtro2: number = 0;

  setProductoSeleccionado(producto: Producto) {
    this.productSelec = producto;
  }

  setProductoBuscado(filtro: string) {
    this.productFilter = this.productos.filter((producto) => {
      return (
        producto.product.toLowerCase().includes(filtro.toLowerCase()) ||
        producto.description.toLowerCase().includes(filtro.toLowerCase())
      );
    });
  }

  setProductoBorrar(producto: Producto) {
    let index = this.productos.indexOf(producto);
    this.productos.splice(index, 1);
    this.productFilter = this.productos;
    this.productSelec = this.productos[0];
  }

  setProductoFiltrado(filtro2: number) {
    this.productFilter = this.productos.filter((producto) => {
      return producto.price <= filtro2;
    });
  }

  setProductoReset() {
    this.productFilter = this.productos;
  }

  infoModal(productModal: ProductoSimilar) {
    this.dataModal = productModal;
  }
}
