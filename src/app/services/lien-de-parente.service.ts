import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LienDeParente } from '../../models/LiendeParente';

@Injectable({
  providedIn: 'root',
})
export class LienDeParenteService {
  constructor(private httpClient: HttpClient) {}

  public linkLienDeParente = 'http://localhost:8280/api/lienDeParente';

  getLienDeParentes(): Observable<LienDeParente[]> {
    return this.httpClient.get<LienDeParente[]>(this.linkLienDeParente);
  }
}
