import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [GeneralComponent],
  imports: [CommonModule, FavoritesRoutingModule],
})
export class FavoritesModule {}
