import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = environment.URL + 'api/educacion';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + '/listado');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `/detalle/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/crear', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.post<any>(this.URL + "/borrar",id);
  }
}
