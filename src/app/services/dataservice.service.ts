import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {

  constructor(private http: HttpClient) {}


  $products: BehaviorSubject<Producto[]> = new BehaviorSubject<
    Producto[]
  >([]);

  $productsFavorites: BehaviorSubject<Producto[]> = new BehaviorSubject<
  Producto[]
>([]);

  // private _datos: Producto[] = [];
  // private _datosSelected: Producto | null = null;


  // get datos(): Producto[] {
  //   return this._datos;
  // }

  // set datos(newdatos: Producto[]) {
  //   this._datos = newdatos;
  // }

  // getDatoSeleccionado(): Producto | null {
  //   return this._datosSelected;
  // }

  // setDatoSeleccionado(newdato: Producto | null) {
  //   this._datosSelected = newdato;
  // }



  getDataProduct() {
    const url = './assets/data/data.json';
    this.http.get<Producto[]>(url).subscribe({
      next: (response) => {
        if (!response) return;
        this.$products.next(response);
        // const firstIndex = 0;
        // this._datos = response;
        // this._datosSelected = response[firstIndex];

      },
      error: (error) => {
        console.log('Error');
      },
      complete: () => {
        console.log('Terminado');
      },
    });
  }

setGuardarFavoritos(productsFavorites: Producto[]) {
  this.$productsFavorites.next(productsFavorites);
}



  // private mostrarProducto(response: Producto[]) {
  //   if (!response) return;
  //   const firstindex = 0;
  //   this._datos = response;
  //   this._datosSelected = response[firstindex];
  // console.log(response);
  // }
}
