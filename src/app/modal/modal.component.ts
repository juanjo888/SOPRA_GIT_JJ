import { Component } from '@angular/core';
import { PRODUCTOS } from '../datos/datos';
import { Producto } from '../tipos/tipos.ts/tipos';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

   data = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };

  infoModal(info: any) {
    this.data = info;
  }
}
