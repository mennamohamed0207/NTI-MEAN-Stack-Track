import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
  useClass: UploadFilesService
})
export class UploadFilesService {

  constructor(private _http: HttpClient) { 
  }
  private url = "http://localhost:3000/imgUpload";

  uploadFile(formData: FormData) :Observable<any> {
    return this._http.post(this.url, formData);
  }
}
