import { Component } from '@angular/core';
import { DataserviceService } from './services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProyectoInicial';

  constructor(private dataService: DataserviceService) {}

  ngOnInit(){
    this.dataService.getDataProduct();
  }

}
