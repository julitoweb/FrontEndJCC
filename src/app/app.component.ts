import { Component } from '@angular/core';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='client';

  
  constructor(
    private personaService: PersonaService
  ){

  }
  getPersonas(){
    let heades = new Headers()
    .set('Type-content', 'aplication/json')
  }
}
