import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { DataserviceService } from 'src/app/services/dataservice.service';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  userForm: FormGroup = this.formBuilder.group({
    product: [null, Validators.required],
    price: [null, Validators.required],
    description: [null, Validators.required],
  });

  formValue: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataserviceService
  ) {}

  productos: Producto[] = []

  ngOnInit() {
    this.dataService.$products.subscribe({
      next: (response) => {
        this.productos = response;
      },
      error: () => {},
      complete: () => {
        console.log('Terminado');
      },
    });
  }

  sendUserInfo() {
    this.formValue = this.userForm.value;
  }

  validateField(field: string): boolean {
    return (
      this.userForm.controls[field].invalid &&
      this.userForm.controls[field].touched
    );
  }
}
