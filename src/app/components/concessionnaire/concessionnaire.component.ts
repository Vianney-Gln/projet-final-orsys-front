import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../../../models/Locations';
import { ReservationsService } from '../../services/reservations.service';

@Component({
  selector: 'app-concessionnaire',
  templateUrl: './concessionnaire.component.html',
  styleUrls: ['./concessionnaire.component.css'],
})
export class ConcessionnaireComponent {
  reservations: Reservation[] = [];

  constructor(private serviceRervation: ReservationsService) {}

  ngOnInit() {
    this.serviceRervation.getAllLocations().subscribe({
      next: (resp) => {
        this.reservations = resp;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
