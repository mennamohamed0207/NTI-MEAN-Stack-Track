import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-data-from',
  templateUrl: './data-from.component.html',
  styleUrl: './data-from.component.css'
})
export class DataFromComponent {
msg:string="hello from data from component"
sendMsg()
{
  return this.msg;
}
constructor(private myConn:ConnectionService) { 
}
ngOnInit(): void {
  this.myConn.changeMSG(this.msg);

}
}
