import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {

  productsFavorites: Producto [] = [];

  constructor(private dataService: DataserviceService) {}

  ngOnInit() {
    this.dataService.$productsFavorites.subscribe({
      next: (response) => {
        this.productsFavorites = response;

        console.log(response);
      },
      error: () => {},
      complete: () => {
        console.log('Terminado');
      },
    });
  }
}
