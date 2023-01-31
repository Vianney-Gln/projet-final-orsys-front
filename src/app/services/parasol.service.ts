import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parasol } from 'src/models/Parasol';
import { File } from '../../models/File';

@Injectable({
  providedIn: 'root',
})
export class ParasolService {
  constructor(private httpClient: HttpClient) {}

  public linkParasol = 'http://localhost:8280/api/parasols';

  getParasolsByFile(fileIds: number[]): Observable<Map<number, Parasol[]>> {
    return this.httpClient.get<Map<number, Parasol[]>>(
      this.linkParasol + '/' + fileIds.join(',')
    );
  }
}
