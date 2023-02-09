import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parasol } from 'src/models/Parasol';

@Injectable({
  providedIn: 'root',
})
export class ParasolService {
  constructor(private httpClient: HttpClient) {}

  public linkParasol = 'http://localhost:8280/api/parasols';

  getParasolsByFile(
    fileIds: number[],
    param: any
  ): Observable<Map<number, Parasol[]>> {
    return this.httpClient.get<Map<number, Parasol[]>>(
      this.linkParasol + '/' + fileIds.join(',') + '/' + param
    );
  }
}
