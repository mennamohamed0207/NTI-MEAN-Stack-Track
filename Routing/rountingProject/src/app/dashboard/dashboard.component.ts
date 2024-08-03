import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private _authService: AuthService) { }
  logOut()
  {
    this._authService.logOut();
  }
}
