import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private authService:AuthService){}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     const { username, password } = this.loginForm.value;
  //     if (username === 'admin' && password === 'admin') {
  //       this.router.navigate(['/dashboard']);
  //     } else {
  //       alert('Invalid credentials');
  //     }
  //   }
  // }

  errorMessage='';
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.authService.login('emilys', 'emilyspass').subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: err => this.errorMessage = err.error.message || 'Login failed'
      });
    }
  }

}
