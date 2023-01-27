import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../../models/Locations';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private httpClient: HttpClient) {}

  id: String | null = localStorage.getItem('utilisateurId');
  public linkLogin = `http://localhost:8280/api/location/user/${this.id}`;

  /**
   * Récupération d'un Observable de type réservation
   * @returns
   */
  getLocationsByUserId(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.linkLogin);
  }
}
