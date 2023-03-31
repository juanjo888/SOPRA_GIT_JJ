import { Component, Input } from '@angular/core';
import { ProductoSimilar } from '../../../tipos/tipos.ts/tipos';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() productModal: ProductoSimilar = {
    image: '',
    product: '',
    price: 0,
    currency: '',
    rating: 0,
    description: '',
  };
}
