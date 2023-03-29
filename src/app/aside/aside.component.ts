import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Producto } from '../tipos/tipos.ts/tipos';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  @Output() productSelecOutAside = new EventEmitter<Producto>();
  @Output() productBuscarOutAside = new EventEmitter<string>();
  @Output() productResetOutAside = new EventEmitter();
  @Output() productFilterOutAside = new EventEmitter<number>();

  @Input() productFilter: Producto[] = [];

  filtro: string = '';
  filtro2: number = 0;

  setProductoSeleccionado(producto: Producto) {
    this.productSelecOutAside.emit(producto);
  }

  setProductoBuscado() {
    this.productBuscarOutAside.emit(this.filtro);
  }

  setProductoFiltrado(filtro2: number) {
    this.productFilterOutAside.emit(filtro2);
  }

  setProductoReset(): void {
    this.productResetOutAside.emit();
    this.filtro2 = 0;
  }
}
