import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../../models/Locations';
import { File } from 'src/models/File';
import { DemandeReservation } from '../../models/DemandeReservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private httpClient: HttpClient) {}

  id: String | null = localStorage.getItem('utilisateurId');
  public linkLocation = `http://localhost:8280/api/location/user/${this.id}`;
  public linkFiles = 'http://localhost:8280/api/files';
  public linkAddDemandeReservation = 'http://localhost:8280/api/location';

  /**
   * Récupération d'un Observable de type réservation
   * @returns
   */
  getLocationsByUserId(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.linkLocation);
  }

  /**
   * Récupération d'un Observable de type file
   * @returns
   */
  getFiles(): Observable<File[]> {
    return this.httpClient.get<File[]>(this.linkFiles);
  }

  addDemandeReservation(
    demandeReservation: DemandeReservation
  ): Observable<Reservation> {
    return this.httpClient.post<Reservation>(
      this.linkAddDemandeReservation,
      demandeReservation
    );
  }
}
