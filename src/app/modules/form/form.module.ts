import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { GeneralComponent } from './general/general.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GeneralComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormModule { }
