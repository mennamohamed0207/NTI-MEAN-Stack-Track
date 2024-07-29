import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator } from './customValidation';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  myForm!: FormGroup;
  // languages: FormArray = new FormArray([new FormControl(null)]);

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, customValidator.passwordValidator()]),
      retypePassword: new FormControl(null, [Validators.required]),
      about: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null),
      gender: new FormControl(null),
      linkedInURL: new FormControl(null),
      phone: new FormControl(null),
      birthDate: new FormControl(null),
      status: new FormControl(null),
      cv: new FormControl(null),
      terms: new FormControl(null),
      //array of languages
      languages: new FormArray([new FormControl(null)]),
    }, { validators: customValidator.matchPassword });
  }
  get languages() {
    let lang = this.myForm.get('languages') as FormArray;
    return lang;
  }

  addLang() {
    this.languages.push(new FormControl(null));

  }
  onSubmit() {
    console.log(this.myForm.controls['email']);
  }
}
