import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscription } from 'src/models/Inscription';

@Injectable({
  providedIn: 'root',
})
export class InscriptionService {
  constructor(private httpClient: HttpClient) {}

  linkInscription = 'http://localhost:8280/api/inscription';

  addNewUser(inscription: Inscription): Observable<Inscription> {
    return this.httpClient.post<Inscription>(this.linkInscription, inscription);
  }
}
