import { Component } from '@angular/core';

@Component({
  selector: 'app-mycom',
  templateUrl: './mycom.component.html',
  styleUrl: './mycom.component.css'
})
export class MycomComponent {
  msg: string = "hello from mycom component";
  isActive=false;
  x:number=10;
  imageURL="favicon.ico"
  fontSize="100px";
  //when putting image we just write image name
   greeting():string {
    return "hello from mycom component"
  }
  getImage():string{
    return this.imageURL
  }
  do(): void {
    // this.msg="hello from do";
    // this.isActive=!this.isActive;
    if(this.x===10){
      this.x=1;
      this.fontSize="100px"
    }else {
      this.x=10;
      this.fontSize="20px";
    }
  }

}
