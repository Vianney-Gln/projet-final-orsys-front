import { Injectable } from '@angular/core';
import { UtilisateurDto } from '../../models/UtilisateurDto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  public linkLogin = 'http://localhost:8280/api/login';

  login(credentials: Credential): Observable<UtilisateurDto> {
    return this.httpClient.post<UtilisateurDto>(this.linkLogin, credentials);
  }
}
