import { Component } from '@angular/core';
import { UploadFilesService } from '../services/upload-files.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css',
  providers: [UploadFilesService]
})
export class UploadFilesComponent {
  constructor(private uploadService: UploadFilesService) { }
  myForm: FormGroup = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    file: new FormControl()
  });

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.myForm.patchValue({
      file: file
    })
  }
  onSubmit(myForm: FormGroup) : void {
    let formData = new FormData();
    formData.append("name", myForm.value.name);
    formData.append("id", myForm.value.id);
    formData.append("filename", myForm.value.file);
    console.log(formData);
    
    this.uploadService.uploadFile(formData).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      }
    })
    // console.log(myForm.value);
    // this.uploadService.uploadFile(this.myForm.value).subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
  }
}
