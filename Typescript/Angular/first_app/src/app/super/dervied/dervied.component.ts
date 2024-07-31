import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dervied',
  templateUrl: './dervied.component.html',
  styleUrl: './dervied.component.css'
})
export class DerviedComponent {
  @Input()product?: {name:string,age:number,id:number};
  @Output()like :EventEmitter<void>=new EventEmitter<void>();

  sendMsg()
  {
    this.like.emit();
  }
}
