import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from 'src/models/Pays';

@Injectable({
  providedIn: 'root',
})
export class PaysService {
  constructor(private httpClient: HttpClient) {}

  public linkPays = 'http://localhost:8280/api/pays';

  getPays(): Observable<Pays[]> {
    return this.httpClient.get<Pays[]>(this.linkPays);
  }

  getPaysById(id: string): Observable<Pays> {
    return this.httpClient.get<Pays>(this.linkPays + '/' + id);
  }
}
