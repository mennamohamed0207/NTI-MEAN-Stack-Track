import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
 styleUrl: './first.component.css',
 
})
export class FirstComponent {
msg='Hello from Angular';
imageURL='img/a.png';
image2URL:string = 'img/m.png';
setMSG(){
  return 'Hello from function'
}

do(){
 this.msg='Hello from button'
 this.myData ='my data from button'
 this.isActive =!this.isActive;
 this.fontSize='40px';
 if(this.x === 10)
 {
 this.x=9;
 }else
 {
  this.x = 10;
 }
  //console.log('hello from button')
}

myData='its my data';
isActive=true;
fontSize='20px';
x=10;

}
