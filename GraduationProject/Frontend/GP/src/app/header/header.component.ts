import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    // trigger('routerTransition', [
    //   transition('* <=> *', [
    //     query(':enter, :leave', style({ position: 'fixed', opacity: 1 })),
    //     group([
    //       query(':enter', [
    //         style({ opacity:0 }),
    //         animate('1000ms ease-in-out', style({ opacity:1 }))
    //       ]),
    //       query(':leave', [
    //         style({ opacity:1 }),
    //         animate('1000ms ease-in-out', style({ opacity:0 }))]),
    //     ])
    //   ])
    // ])

    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }
  greeting= {
    username: "Menna Mohamed Abdelbaset",
    title: "Welcome, I'm Menna",
    subTitle: "A passionate Computer Engineer 🚀 Passionate about tackling complex problems and creating impactful projects, from machine learning innovations to engaging web applications. Always eager to explore new technologies and excel in challenging technical environments.",
    resumeLink: "https://drive.google.com/file/d/1wKpkFRLQBiBWQYFYoCnT--nDyHxKO7lC/view?usp=drive_link"
  }

  ngOnInit(): void {
  

  

  }

}