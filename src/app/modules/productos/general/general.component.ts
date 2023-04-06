import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoSimilar } from 'src/app/interfaces/similar';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  dataModal: ProductoSimilar = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };

  productos: Producto[] = [];
  productFilter = this.productos;
  productsFavorites: Producto[] = [];
  productSelec: Producto | null = this.productos[0];
  starCol = Array(5).fill(true);

  filtro: string = '';
  filtro2: number = 0;
  usandoFiltro: boolean = false;

  constructor(private dataService: DataserviceService) {}

  ngOnInit() {
    // this.productos = this.dataService.datos;
    // this.productSelec = this.dataService.getDatoSeleccionado();
    // this.productFilter = this.dataService.datos;
    // this.productSelec.date.getDate();
    // console.log(this.productos)
    this.dataService.$products.subscribe({
      next: (response) => {
        this.productos = response;
        this.productFilter = this.productos;
        this.productSelec = this.productFilter[0];
        console.log(response);
      },
      error: () => {},
      complete: () => {
        console.log('Terminado');
      },
    });
  }

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

  guardarFavoritos(productSelec: Producto) {
    if (this.productsFavorites.includes(productSelec)) {
      this.eliminarFavorito();
    } else {
      this.productsFavorites.push(productSelec);
    }
    this.comprobarFavorito(productSelec);
    this.dataService.setGuardarFavoritos(this.productsFavorites);
  }

  comprobarFiltro(filtro2: number) {
    if (filtro2 === 0) {
      this.usandoFiltro = false;
    } else {
      this.usandoFiltro = true;
    }
  }

  private eliminarFavorito() {
    this.productsFavorites.splice(
      this.productsFavorites.findIndex((product) => {
        return product.id === this.productSelec?.id;
      }),
      1
    );
  }
}
