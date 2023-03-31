import { Component } from '@angular/core';
import { PRODUCTOS } from 'src/app/datos/datos';
import { Producto, ProductoSimilar } from 'src/app/tipos/tipos.ts/tipos';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
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
  usandoFiltro: boolean = false;

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
    this.comprobarFiltro(this.filtro2);
  }

  infoModal(productModal: ProductoSimilar) {
    this.dataModal = productModal;
  }

  comprobarFavorito(productSelec: Producto) {
    let index = this.productos.indexOf(productSelec);
    if (this.productos[index].favorito) {
      this.productos[index].favorito = false;
    } else {
      this.productos[index].favorito = true;
    }
  }

  comprobarFiltro(filtro2: number) {
    if (filtro2 === 0) {
      this.usandoFiltro = false;
    } else {
      this.usandoFiltro = true;
    }
  }
}
