import { ProductoReview } from './review';
import { ProductoSimilar } from './similar';

export interface Producto {
  id: number;
  image: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  favorito: boolean;
  description: string;
  similarProducts?: ProductoSimilar[];
  reviews?: ProductoReview[];
}
