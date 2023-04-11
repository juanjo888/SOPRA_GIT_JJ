import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  productsFavorites: Producto[] = [];

  constructor(private dataService: DataserviceService) {}

  ngOnInit() {
    this.dataService.$products.subscribe({
      next: (response: Producto[]) => {
        this.productsFavorites = this.getFavoriteProducts(response);
      },
    });
  }
  setFavoritoBorrar(productSelec: Producto) {
    const indiceProducto: number = this.encontrarIndiceProducto(
      productSelec.id
    );
    this.productsFavorites.splice(indiceProducto, 1);
    productSelec.favorito = false;
  }
  encontrarIndiceProducto(id: number): number {
    return this.productsFavorites.findIndex((product) => {
      return product.id === id;
    });
  }

  private getFavoriteProducts(products: Producto[]): Producto[] {
    const productosFiltrados = products.filter((product) => {
      return product.favorito;
    });

    return productosFiltrados || [];
  }
}
