import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  standalone: false,
  
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})

export class FirstCompComponent {
  Nome: string = "Cristiano";
  idade: number = 37;
  job = 'programmer';
  Hobbies = ['Correr', 'Jogar', 'Estudar'];

  car = {
    name: 'Marea',
    year: 2007,
    symbol: '🔥',
  };

  //  constructor

}
