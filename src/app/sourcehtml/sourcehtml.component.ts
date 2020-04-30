import { Component, OnInit } from '@angular/core';
import { SourcehtmlService } from '../service/data/sourcehtml.service';
import { ActivatedRoute, Router } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';


export class ScraperInfo {
  constructor(
    public name: string,
    public collection_type: number,
    public frequency: number, 
    public made_by: string, 
    public source: string,
    public selectors: string, 
    public column_names: string, 
    public created: number,
    public is_active: boolean, 
    public proceed: boolean 
  )
  {}
}

@Component({
  selector: 'app-sourcehtml',
  templateUrl: './sourcehtml.component.html',
  styleUrls: ['./sourcehtml.component.css']
})
export class SourcehtmlComponent implements OnInit{

  scraperInfo: ScraperInfo;
  website: string;
  
  sourcehtml: string;
  selectors: Array<String>;
  data = [];

  testData: string;

  constructor(
    private sourceHtmlService: SourcehtmlService,
    private route: ActivatedRoute,
    private router: Router,
    public sanitizer: DomSanitizer
  ) { 
  }

  ngOnInit() {
    this.scraperInfo = new ScraperInfo('name2', 2, 1, 'Adam', 'source', 'selectors', 'columns', null, true, false);
    this.website = "http://www.mycit.ie/";
  }

  getScrape(){
    this.sourceHtmlService.getScrape(this.scraperInfo).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );

  }

  handleSuccessfulResponse(response) {
    console.log(response) ;
  }

  handleErrorResponse(error) {
    console.log(error.error.text)
    this.testData = error.error.text
  }

 sendScraperInfo() {
  this.scraperInfo.created = Date.now()
  console.log(this.scraperInfo)
  this.sourceHtmlService.sendScraperInfo(this.scraperInfo).subscribe(
    data => {
      console.log(data)
      this.done()
    });
  }


  done() {
    this.router.navigate(['todos'])
  }
  
  loadWebsite(){
    
  }

    trackByFn(index, item) {
    return index; 
  }

 store(newValue){
   this.website = newValue;


  //  this.sourceHtmlService.sendSource(this.data).subscribe(
  //   data => {
  //     console.log(data)
  //   })
 }
}
