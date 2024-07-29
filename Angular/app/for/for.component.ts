import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
names = ['ali','omr','ahmed','sayed']
myCourse:tech[]=[{id:0,name:'mongoDB',desc:'database engine',imgURL:'img/m.png',isActive:true},
  {id:1,name:'express',desc:'API framework',imgURL:'img/e.png',isActive:true},
  {id:2,name:'Angular',desc:'front-end framework',imgURL:'img/a.png',isActive:true},
  {id:3,name:'node js',desc:'back-end framwork',imgURL:'img/n.png',isActive:true}
]

delete(id:number){
  this.myCourse= this.myCourse.filter(course => course.id !== id)

}
setActive(id:number){
  this.myCourse[id].isActive=! this.myCourse[id].isActive;
}


}

interface tech{
  id:number;
  name:string;
  desc:string;
  imgURL:string;
  isActive:boolean;
}