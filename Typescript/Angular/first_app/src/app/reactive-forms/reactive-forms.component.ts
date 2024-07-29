import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './customValidation';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit {
  //can be null 
  myForm!: FormGroup;
  obj={
    name:"menna",
    age:22
  };

  //be excuted when component is created
  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      password: new FormControl(null,[Validators.required,customValidator.passwordValidator()]),
      retypePassword: new FormControl(null),
      about: new FormControl(null),
      email: new FormControl(null,[Validators.required,Validators.email]),
      age: new FormControl(null),
      gender: new FormControl(null),
      linkedInURL: new FormControl(null),
      phone: new FormControl(null),
      birthDate: new FormControl(null),
      status:new FormControl(null),
      cv : new FormControl(null),
      terms:new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.myForm.controls['email']);
  }

}
