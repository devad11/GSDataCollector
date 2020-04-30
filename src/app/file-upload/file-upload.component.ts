import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../service/data/api-data.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  constructor(
    private apiDataService: ApiDataService,
  ) { }

  ngOnInit() {
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      let file: File = fileList[0];
      console.log(file)
      
      let formData:FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      console.log(formData)
      this.apiDataService.sendFile(file).subscribe(
        data => {
          console.log(data)
        }
      )

      
        // let file: File = fileList[0];
        // let formData:FormData = new FormData();
        // formData.append('uploadFile', file, file.name);
        // let headers = new Headers();
        // /** In Angular 5, including the header Content-Type can invalidate your request */
        // headers.append('Content-Type', 'multipart/form-data');
        // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        // this.http.post(`${this.apiEndPoint}`, formData, options)
        //     .map(res => res.json())
        //     .catch(error => Observable.throw(error))
        //     .subscribe(
        //         data => console.log('success'),
        //         error => console.log(error)
        //     )
    }
}

}
