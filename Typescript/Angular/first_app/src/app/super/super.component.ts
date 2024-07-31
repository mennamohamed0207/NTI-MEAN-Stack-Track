import { Component } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrl: './super.component.css'
})
export class SuperComponent {
  protected objs:{id:number,name:string,age:number}[]=[
    {
      id:1,
      name:"Ahmed",
      age:21
    },
    {
      id:2,
      name:"Sally",
      age:21
    },
    {
      id:3,
      name:"Soha",
      age:21
    }
  ];
  protected msg:string="";
  onLike()
  {
    this.msg="hello";
  }
  addProduct()
  {
    this.objs.push({id:4,name:"Sahil",age:21});
  }
}
