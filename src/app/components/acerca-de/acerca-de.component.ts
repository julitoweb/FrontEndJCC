import { Component, OnInit } from '@angular/core';
import { persona} from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
//import {apellido} from 'src/app/persona.model';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})


export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","","","");

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})

  }

}
//function directive() {
//  throw new Error('Function not implemented.');
//0}

