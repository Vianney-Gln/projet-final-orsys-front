import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from 'src/app/services/reservations.service';
import { File } from 'src/models/File';
import { DemandeReservation } from 'src/models/DemandeReservation';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css'],
})
export class CreateReservationComponent {
  constructor(private serviceReservation: ReservationsService) {}
  public signupForm: any;
  public currentDemandeReservation?: DemandeReservation;
  public files: File[] = [];

  ngOnInit() {
    this.initFormGroup();

    this.serviceReservation.getFiles().subscribe({
      next: (resp) => {
        this.files = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  initFormGroup() {
    this.signupForm = new FormGroup({
      dateHeureDebut: new FormControl(null, Validators.required),
      dateHeureFin: new FormControl(null, Validators.required),
      remarques: new FormControl(null),
      requestedFiles: new FormArray([]),
    });
  }

  get formRequestedFiles() {
    return this.signupForm.controls['requestedFiles'] as FormArray;
  }

  submitHandler() {
    this.currentDemandeReservation = this.signupForm.value;
    this.currentDemandeReservation!.idLocataire = Number(
      localStorage.getItem('utilisateurId')
    );
    this.serviceReservation
      .addDemandeReservation(this.currentDemandeReservation!)
      .subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err);
        },
      });
    console.log(this.currentDemandeReservation);
  }

  addParasol() {
    let formGroup = new FormGroup({
      name: new FormControl('Parasol ' + this.formRequestedFiles?.length + 1),
      selectedFile: new FormControl(null, [Validators.required]),
    });
    this.formRequestedFiles.push(formGroup);
    console.log(this.signupForm);
  }
}
