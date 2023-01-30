import { ReservationsService } from 'src/app/services/reservations.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../../../../models/Locations';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.css'],
})
export class DetailReservationComponent {
  constructor(
    private serviceReservation: ReservationsService,
    private activatedRoute: ActivatedRoute
  ) {}

  detailReservation!: Reservation;

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p) => {
        this.serviceReservation.getLocationById(Number(p.get('id'))).subscribe({
          next: (resp) => {
            this.detailReservation = resp;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }

  validerReservation(id: number) {
    console.log('test');
  }
}
