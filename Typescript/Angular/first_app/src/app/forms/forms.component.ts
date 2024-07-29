import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  changeUsername(myForm:NgForm){
    myForm.form.patchValue({
      username: "mynewusername"
    });

  }
  onSubmit(myForm: NgForm) {

    console.log(myForm.value);
    
    // myForm.setValue({
    //   about: "",
    //   age
    //     :
    //     "",
    //   birthDate
    //     :
    //     "",
    //   cv
    //     :
    //     "",
    //   email
    //     :
    //     "",
    //   gender
    //     :
    //     "",
    //   linkedInURL
    //     :
    //     "",
    //   password
    //     :
    //     "",
    //   phone
    //     :
    //     "",
    //   retypePassword
    //     :
    //     "",
    //   status
    //     :
    //     "",
    //   terms
    //     :
    //     true,
    //   username
    //     :
    //     "mynewusername",
    // });

  }
}
