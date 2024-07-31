import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
   protected objs:any=[
    {
      id:1,
      name:"Sahil",
      age:21
    },
    {
      id:2,
      name:"Sahil",
      age:21
    },
    {
      id:3,
      name:"Sahil",
      age:21
    }
  ];
}