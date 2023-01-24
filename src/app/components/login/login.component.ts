import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  login(): void {

    console.log(this.nombreUsuario, this.password);
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.nombreUsuario, this.password).subscribe(data => {
      console.log("intentando entrar", data);


      if (data?.estado == "OK") {
        confirm("ENTRASTE CON EXITO");
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken("tokenCookieLoginSecretaASDASD");
        // this.tokenService.setUserName(data.nombreUsuario);
        // this.tokenService.setAuthorities(data.authorities);
        // this.roles = data.authorities;
        this.router.navigate([''])
      } else {
        confirm(data?.mensaje);
      }





    })

  }

  registrar(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.nuevo(this.nombreUsuario, this.password).subscribe(data => {
      if (data?.estado == "OK") {
        confirm("REGISTRADO CON EXITO.");
        this.router.navigate([''])
      } else {
        confirm(data?.mensaje);
      }
    });
  }

}
