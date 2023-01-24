import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = environment.URL + 'api/habilidades';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.URL + '/listado');
  }

  public detail(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.URL + `/detalle/${id}`);
  }

  public save(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/crear', skill);
  }

  public update(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.URL + `/update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.post<any>(this.URL + `/borrar`, id);
  }
}
