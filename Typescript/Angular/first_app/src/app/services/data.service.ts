// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  constructor() { 

  }
 //make a type
 
  objs: { id: number, name: string, age: number }[] = [
    {
      id: 1,
      name: "Ahmed",
      age: 21
    },
    {
      id: 1,
      name: "Ahmed",
      age: 21
    },
    {
      id: 1,
      name: "Ahmed",
      age: 21
    }
  ]
  returnData():{name:string,age:number,id:number}[] {
    return this.objs;
  }

 
}
