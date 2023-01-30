import { ReservationsService } from 'src/app/services/reservations.service';
import { Component, Input } from '@angular/core';
import { Reservation } from '../../../../models/Locations';
import { TraitementReservation } from '../../../../models/TraitementReservation';

@Component({
  selector: 'app-list-reservation-concessionnaire',
  templateUrl: './list-reservation-concessionnaire.component.html',
  styleUrls: ['./list-reservation-concessionnaire.component.css'],
})
export class ListReservationConcessionnaireComponent {
  constructor(private serviceReservation: ReservationsService) {}

  currentReservation!: Reservation;

  traitementReservation!: TraitementReservation;

  @Input() reservations!: Reservation[];

  decliner(id: number) {
    if (confirm('Voulez vous vraiment décliner cette réservation?')) {
      const refus = new TraitementReservation(3, []);

      this.serviceReservation.traitementReservation(id, refus).subscribe({
        next: () => {
          alert('Demande de réservation mise à jour.');
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
