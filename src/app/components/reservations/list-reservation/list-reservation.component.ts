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

  ngOnInit() {
    this.serviceReservation.getLocationsByUserId().subscribe({
      next: (resp) => {
        this.reservations = resp;
        console.log(this.reservations);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
