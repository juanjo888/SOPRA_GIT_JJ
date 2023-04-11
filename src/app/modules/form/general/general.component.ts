import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
userForm: FormGroup = this.formBuilder.group({
  product: [null, Validators.required],
  price: [null, Validators.required],
  description: [null, Validators.required]
});

formValue: any;

constructor(private formBuilder: FormBuilder) {}

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
