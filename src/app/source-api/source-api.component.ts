import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiDataService } from '../service/data/api-data.service';
import { ScraperInfo } from '../sourcehtml/sourcehtml.component';
import { SourcehtmlService } from '../service/data/sourcehtml.service';
import { BasicAuthenticationService } from '../service/basic-authentication-service';

@Component({
  selector: 'app-source-api',
  templateUrl: './source-api.component.html',
  styleUrls: ['./source-api.component.css']
})
export class SourceApiComponent implements OnInit {

  apiAddress = "";
  apiData: string;
  msg: string;


  scraperInfo: ScraperInfo;

  constructor(private route: ActivatedRoute,
  private service: ApiDataService, 
  private router: Router,
  private basicAuthenticationService: BasicAuthenticationService,
  private sourceHtmlService: SourcehtmlService
  ) { }

  ngOnInit() {
    this.scraperInfo = new ScraperInfo('name2', 1, 1, this.basicAuthenticationService.getAuthenticatedUser(), 'source', null, null, null, true, false);
  }

  getData() {
    this.service.retrieveDataFromApi(this.apiAddress).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }
  handleErrorResponse(error: any) {
    this.apiData = error.message;
  }

  handleSuccessfulResponse(response: any) {
    this.apiData = response;
    console.log(response)
    this.service.apiDataToBackend(this.apiAddress)
    .subscribe(
      response => this.msg = response,
    );
    console.log(this.msg)
  }  

  sendScraperInfo() {
    this.scraperInfo.created = Date.now()
    console.log(this.scraperInfo)
    this.sourceHtmlService.sendScraperInfo(this.scraperInfo).subscribe(
      data => {
        console.log(data)
        this.done()
      },
      error => this.done());
      
    } 

    done() {
      this.router.navigate(['todos'])
    }

    store(newValue){
      this.apiAddress = newValue;
    }

  // handleSuccessfulResponse(response: any) {
  //   this.apiData = response;
  //   this.service.apiDataToBackend(this.apiData)
  //   .subscribe(
  //     response => this.msg = response,
  //   );
  //   console.log(this.msg)
  // }

}
