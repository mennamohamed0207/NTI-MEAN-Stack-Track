//Data injection and services to make it dynamic you can either use it in providers or keep the lines of the injection in service 



import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DerviedComponent } from './dervied/dervied.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrl: './super.component.css',
  providers: [DataService]
})
export class SuperComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.updateChild("<h1>helloooooooo from parent</h1>");
  }
  updateChild(content: string) {
    if (this.mychild) {
      this.mychild.htmlcontent = content;
      this.cdr.detectChanges();
    }
  }
  constructor(private cdr: ChangeDetectorRef, private dataService: DataService) { }

  protected objs: { id: number, name: string, age: number }[] = [
    {
      id: 1,
      name: "Ahmed",
      age: 21
    },
    {
      id: 2,
      name: "Sally",
      age: 21
    },
    {
      id: 3,
      name: "Soha",
      age: 21
    }
  ];
  protected msg: string = "";
  onLike() {
    this.msg = "hello";
  }
  addProduct() {
    this.objs.push({ id: 4, name: "Sahil", age: 21 });
  }
  chagneParentURL() {
    this.updateChild("<h1>helloooooooo from parent changed</h1>");
  }
  @ViewChild(DerviedComponent)
  mychild!: DerviedComponent;
  data = new DataService();
  getData() {
    console.log(
      this.data.returnData()
    );

  }



}
