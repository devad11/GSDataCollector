import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiDataService } from '../service/data/api-data.service';

@Component({
  selector: 'app-source-api',
  templateUrl: './source-api.component.html',
  styleUrls: ['./source-api.component.css']
})
export class SourceApiComponent implements OnInit {

  apiData: string;
  msg: string;

  constructor(private route: ActivatedRoute,
  private service: ApiDataService) { }

  ngOnInit() {
  }

  getData() {
    this.service.retrieveDataFromApi().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }
  handleErrorResponse(error: any) {
    this.apiData = error.message;
  }
  handleSuccessfulResponse(response: any) {
    this.apiData = response;
    this.service.apiDataToBackend(this.apiData)
    .subscribe(
      response => this.msg = response,
    );
    console.log(this.msg)
  }

}
