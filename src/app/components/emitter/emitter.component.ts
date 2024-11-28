import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  standalone: false,
  
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  myNumber: number = 0; //propriedade

  onChangeNumber() {   
    // função definida dentro da classe do componente (EmitterComponent).
    this.myNumber = Math.floor(Math.random() * 999);
  }

}
