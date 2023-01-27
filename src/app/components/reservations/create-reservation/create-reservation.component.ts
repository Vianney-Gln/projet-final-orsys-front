import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css'],
})
export class CreateReservationComponent {
  signupForm: any;
  ngOnInit() {
    this.signupForm = new FormGroup({
      dateDebut: new FormControl(null, Validators.required),
      dateFin: new FormControl(null, [Validators.required, Validators.email]),
      parasols: new FormArray([]),
    });
  }

  get formParasols() {
    return <FormArray>this.signupForm.get('parasols');
  }

  submitHandler() {
    console.log(this.signupForm.value);
  }

  addParasols() {
    let newControl = new FormControl(null, Validators.required);
    this.formParasols.push(newControl);
  }
}
