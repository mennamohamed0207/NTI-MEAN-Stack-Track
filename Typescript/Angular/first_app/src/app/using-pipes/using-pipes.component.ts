import { Component } from '@angular/core';

@Component({
  selector: 'app-using-pipes',
  templateUrl: './using-pipes.component.html',
  styleUrl: './using-pipes.component.css'
})
export class UsingPipesComponent {
  title: string = 'using Pipes';
  name: string = 'menna mohamed';
  userName:string='CAPTIALS';
  date: Date = new Date();
  grade=22/150;
  price=22.534549;
  myData=new Promise((res)=>{
    setTimeout(()=>res('done'),2000);
  })
}
