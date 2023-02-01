import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReservationsService } from 'src/app/services/reservations.service';
import { File } from 'src/models/File';
import { DemandeReservation } from 'src/models/DemandeReservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css'],
})
export class CreateReservationComponent {
  constructor(
    private serviceReservation: ReservationsService,
    private router: Router
  ) {}
  public signupForm: any;
  public currentDemandeReservation!: DemandeReservation;
  public files: File[] = [];
  public message = '';
  public errorDateMsg = '';
  public currentYear: any;

  ngOnInit() {
    this.initFormGroup();

    const date = new Date();
    this.currentYear = date.getFullYear();

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
      requestedFiles: new FormArray([], Validators.required),
    });
  }

  get formRequestedFiles() {
    return this.signupForm.controls['requestedFiles'] as FormArray;
  }

  submitHandler() {
    this.currentDemandeReservation = this.signupForm.value;

    if (
      this.compareDate(
        this.currentDemandeReservation.dateHeureDebut!,
        this.currentDemandeReservation.dateHeureFin!
      ) == false
    ) {
      this.errorDateMsg =
        'la date début ne peut être inférieur à la date de fin.';
      return;
    }

    this.currentDemandeReservation!.idLocataire = Number(
      localStorage.getItem('utilisateurId')
    );
    this.serviceReservation
      .addDemandeReservation(this.currentDemandeReservation!)
      .subscribe({
        next: () => {
          this.message = 'Demande de réservation enregistrée.';
          setTimeout(() => {
            this.router.navigateByUrl('/reservations');
          }, 2000);
        },
        error: (err) => {
          console.log(err);
          this.message =
            'Il y a eu une erreur lors de votre demande de réservation.';
        },
      });
  }

  addParasol() {
    let formGroup = new FormGroup({
      name: new FormControl('Parasol ' + (this.formRequestedFiles.length + 1)),
      selectedFile: new FormControl(null, [Validators.required]),
    });
    this.formRequestedFiles.push(formGroup);
  }

  compareDate(dateDebutStr: string, dateFinStr: string): boolean {
    const dateDebut: number = Date.parse(dateDebutStr);
    const dateFin: number = Date.parse(dateFinStr);

    return dateDebut <= dateFin;
  }
}
