import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopguardRoutingModule } from './shopguard-routing.module';
import { ShopComponent } from './shop/shop.component';


@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopguardRoutingModule
  ]
})
export class ShopguardModule { }
