import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {

  constructor(private router: Router,private _authService: AuthService) {}

  
  go() {
    this.router.navigate(['/dashboard'])
  }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    console.log("admin");
    
    this._authService.login("emilys","emilyspass").subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/dashboard'])
      },
      error: (err) => {
        console.log(err);
        this.errorMsg = err.error.message|| "Something went wrong";
      }
    })
  }
  errorMsg="";
  

}
