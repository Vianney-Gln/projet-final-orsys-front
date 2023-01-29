import { Component, Input } from '@angular/core';
import { Reservation } from '../../../../models/Locations';

@Component({
  selector: 'app-list-reservation-concessionnaire',
  templateUrl: './list-reservation-concessionnaire.component.html',
  styleUrls: ['./list-reservation-concessionnaire.component.css'],
})
export class ListReservationConcessionnaireComponent {
  @Input() reservations!: Reservation[];
}
