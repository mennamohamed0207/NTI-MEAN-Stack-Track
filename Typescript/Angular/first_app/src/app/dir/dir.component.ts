import { Component } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrl: './dir.component.css'
})
export class DirComponent {
  isActive = false;
  items=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth'];
  setIsActive(value:string): void {
    this.isActive = value === 'true';
  }
}
