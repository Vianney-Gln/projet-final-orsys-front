import { Component } from '@angular/core';
import { Reservation } from 'src/models/Locations';
import { ReservationsService } from '../../../services/reservations.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css'],
})
export class ListReservationComponent {
  constructor(private serviceReservation: ReservationsService) {}

  reservations: Reservation[] = [];
  idCurrentUser: string | null = '';

  ngOnInit() {
    this.idCurrentUser = localStorage.getItem('utilisateurId');
    this.serviceReservation.getLocationsByUserId(this.idCurrentUser).subscribe({
      next: (resp) => {
        this.reservations = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
