import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor( ) { }
  private myMessage=new BehaviorSubject<string>("default msg");
  currentMSG=this.myMessage.asObservable();
  changeMSG(msg:string)
  {
    this.myMessage.next(msg);
  }
}
