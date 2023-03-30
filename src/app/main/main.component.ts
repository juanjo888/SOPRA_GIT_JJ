import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Producto, ProductoSimilar } from '../tipos/tipos.ts/tipos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Output() borradoMain = new EventEmitter<Producto>();
  @Output() productModal = new EventEmitter<ProductoSimilar>();
  @Output() favorito = new EventEmitter<Producto>();

  @Input() productSelec: Producto | undefined;

  starCol = Array(5).fill(true);

  setProductoBorrar(product: Producto) {
    this.borradoMain.emit(product);
  }

  infoModal(productoSim: ProductoSimilar) {
    this.productModal.emit(productoSim);
  }

  setFavoritoEmit(productSelec: Producto) {
    this.favorito.emit(productSelec);
  }
}
