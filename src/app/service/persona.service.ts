import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
providedIn: 'root'
})

export class PersonaService {
  URL = 'http://localhost:8080/api/persona/';

  constructor(private http: HttpClient) {}
  
  public getPersona(): Observable<persona>{
    return this.http.get<persona> (this.URL+ 'traer/perfil');
  }
//   @constructor(){}
}

//URL = environment.URL + 'personas/';

   


//@constructor new: any PersonaService(http: any, HttpClient: any): PersonaService

//constructor(private http: HttpClient) {}
//  public getPersona(): Observable "personaService"{
//         return this.http.get<persona> (this.url+ 'traer/perfil');
//  }
//getPersona (){
//    let header = new HttpHeaders()
//    .set('Type-comtemt', 'aplication/json')
//    return this.http.get(this.url, {
//      headers:header
//    })
//      .set ('Type-content', 'aplication/json');
//     return this.http.get(this.url,);
//      headers: header
//  }
//import { persona } from '../model/persona.model';
//@Injectable({
//  providedIn: 'root'
//})
//export class PersonaService {

 // public getPersona(): Observable<persona>{
    
 // }
//}
