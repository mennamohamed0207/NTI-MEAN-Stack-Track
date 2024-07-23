import { Component } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrl: './dir.component.css'
})

export class DirComponent {
  isActive = false;
  items = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth'];
  techs:Tech[]=[
    {
      name: 'MongoDB',
      logo: 'mongodb.png',
      description: 'MongoDB is a source-available cross-platform document-oriented database program.',
      isActive:true
    },
    {
      name: 'ExpressJS',
      logo: 'expressjs.png',
      description: 'Express.js is a minimal and flexible Node.js web application framework.',
      isActive:true
    },
    {
      name: 'Angular',
      logo: 'angular.png',
      description: 'Angular is an application development framework and open-source project from Google',
      isActive:true
    },
    {
      name: 'NodeJS',
      logo: 'nodejs.png',
      description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      isActive:true
    }
  ]
  setIsActive(value: string): void {
    this.isActive = value === 'true';
  }
  delete(index: number): void {
    this.techs.splice(index, 1);
  }
}

interface Tech {

  name: string;
  logo: string;
  description: string;
  isActive: boolean;


}