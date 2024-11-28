import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  standalone: false,
  
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css'
})
export class ParentDataComponent implements OnInit{
  @Input() name: string = '';

  constructor() {}

  ngOnInit(): void {
    
  }

}
