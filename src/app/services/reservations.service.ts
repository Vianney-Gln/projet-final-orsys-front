import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  constructor(private httpClient: HttpClient) {}

  id: String | null = localStorage.getItem('utilisateurId');
  public linkLogin = `http://localhost:8280/api/location/user/${this.id}`;

  getLocationsByUserId(): Observable<any> {
    return this.httpClient.get(this.linkLogin);
  }
}
