import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: false,
  
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show: boolean = false;

  showMessage(): void{
    this.show = !this.show; //toggle
  }
}
