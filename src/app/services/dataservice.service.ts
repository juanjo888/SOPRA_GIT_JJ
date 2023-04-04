import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataserviceService {
  public $products: BehaviorSubject<Producto[]> = new BehaviorSubject<
    Producto[]
  >([]);

  // private _datos: Producto[] = [];
  // private _datosSelected: Producto | null = null;

  constructor(private http: HttpClient) {}

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
        // const firstIndex = 0;
        // this._datos = response;
        // this._datosSelected = response[firstIndex];
        this.$products.next(response);
      },
      error: (error) => {},
      complete: () => {
        console.log('Terminado');
      },
    });
  }

  // private mostrarProducto(response: Producto[]) {
  //   if (!response) return;
  //   const firstindex = 0;
  //   this._datos = response;
  //   this._datosSelected = response[firstindex];
  // console.log(response);
  // }
}
