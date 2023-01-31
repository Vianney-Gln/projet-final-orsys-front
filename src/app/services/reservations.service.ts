import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../../models/Locations';
import { File } from 'src/models/File';
import { DemandeReservation } from '../../models/DemandeReservation';
import { TraitementReservation } from '../../models/TraitementReservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private httpClient: HttpClient) {}

  public linkLocation = `http://localhost:8280/api/location/user/`;
  public linkFiles = 'http://localhost:8280/api/files';
  public linkAddDemandeReservation = 'http://localhost:8280/api/location';
  public linkAllLocations = 'http://localhost:8280/api/locations';
  public linkLocationById = 'http://localhost:8280/api/location/';

  /**
   * Récupération d'un Observable de type réservation
   * @returns
   */
  getLocationsByUserId(id: string | null): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.linkLocation + id);
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

  getAllLocations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.linkAllLocations);
  }

  getLocationById(id: number): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.linkLocationById}${id}`);
  }

  traitementReservation(
    id: number,
    traitementReservation: TraitementReservation
  ): Observable<void> {
    return this.httpClient.put<void>(
      'http://localhost:8280/api/location/' + id,
      traitementReservation
    );
  }
}
