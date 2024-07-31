import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dervied',
  templateUrl: './dervied.component.html',
  styleUrl: './dervied.component.css'
})
export class DerviedComponent {
  @Input()product?: {name:string,age:number,id:number};
  @Output()like :EventEmitter<void>=new EventEmitter<void>();
  htmlcontent: string | any;

  sendMsg()
  {
    this.like.emit();
  }
  updateChild()
  {
    this.htmlcontent=this.htmlcontent;
  }
  mySwitch='case1';
  userType=['admin','user','student'];
  selectedType='';
  changeCase()
  {
    this.mySwitch='';
  }
}
