import { Component } from '@angular/core';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-data-to',
  templateUrl: './data-to.component.html',
  styleUrl: './data-to.component.css'
})
export class DataToComponent {
msg:string="hello from data to component"
recieveMsg(message:string){
  this.msg=message;
}

constructor(private myConn:ConnectionService) { 
}
ngOnInit(): void {
  this.myConn.currentMSG.subscribe((msg)=>{this.recieveMsg(msg)})

}
}
