import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Producto } from '../../../interfaces/producto';

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
  @Output() comprobarFilterOutAside = new EventEmitter<number>();

  @Input() productFilter: Producto[] = [];
  @Input() usandoFiltro: boolean = false;

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

  comprobarFiltro() {
    this.comprobarFilterOutAside.emit(this.filtro2);
  }
}
