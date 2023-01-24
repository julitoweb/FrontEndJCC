import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL + 'api/usuario';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>('/api/customers');
  }

  public nuevo(usuario: String, password: String): Observable<any> {
    return this.http.post<any>(this.URL + '/crear', { nombre: usuario, contrasenia: password });
  }

  public login(usuario: String, password: String): Observable<any> {
    console.log('login');
    const httpOptions = {
      headers: new HttpHeaders()
    }
    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    //httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    httpOptions.headers.append("Access-Control-Allow-Origin", "*");
    httpOptions.headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next()
    //});
    return this.http.post<any>(this.URL + '/ingresar', { nombre: usuario, contrasenia: password }, httpOptions);
  }
}
