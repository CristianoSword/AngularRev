import { Component } from '@angular/core';

import { Animal } from '../../Animal'; // importar interface

@Component({
  selector: 'app-list-render',
  standalone: false,
  
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})

export class ListRenderComponent {
// declaracaod e propriedade com lista de vetor de objetos, definido com a interface Animal
  animals: Animal[] = [
    {name: "Tomas", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 10},
    {name: "Frida", type: "Dog", age: 5},
    {name: "Bob", type: "Horse", age: 1},
  ]

}
