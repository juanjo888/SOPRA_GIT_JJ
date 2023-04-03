import { Component } from '@angular/core';
import { GuardGuard } from '../guard/guard.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

constructor(private guardos: GuardGuard){}

accesoShop(){
  this.guardos.keysiono = true;
}

}
