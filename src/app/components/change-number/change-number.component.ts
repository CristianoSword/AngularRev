import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: false,
  
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  //usado para criar eventos personalizados que podem ser disparados por um componente filho
  // e escutados pelo componente pai.
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.changeNumber.emit();
  }
}
