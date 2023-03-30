

export type Producto = {
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
};

export type ProductoSimilar = {
  image: string;
  product: string;
  price: number;
  currency: string;
  rating: number;
  description: string;
};

export type ProductoReview = {
  image: string;
  name: string;
  raging: number;
  opinion: string;
  date: string;
};


