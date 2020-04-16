import { Component, OnInit } from '@angular/core';
import { SourcehtmlService } from '../service/data/sourcehtml.service';
import { ActivatedRoute, Router } from '@angular/router';

export class ScraperInfo {
  constructor(
    public title: String,
    public active: boolean,
    public created: number,
    public source: String,
    public selector: string //Array<String>
  )
  {}
}

@Component({
  selector: 'app-sourcehtml',
  templateUrl: './sourcehtml.component.html',
  styleUrls: ['./sourcehtml.component.css']
})
export class SourcehtmlComponent implements OnInit{

  scraperInfo = new ScraperInfo('title', true, 0, 'source', 'selector');
  website: string;
  
  sourcehtml: string;
  selectors: Array<String>;
  data = [];
  
  
  constructor(
    private sourceHtmlService: SourcehtmlService,
    private route: ActivatedRoute,
    private router: Router
  ) { 

  }

  ngOnInit() {
    this.scraperInfo = new ScraperInfo('title', true, 0, 'source', 'selector');
  }


 sendScrapeInfo() {
  console.log(this.scraperInfo)
  // this.scraperInfo.created = Date.now()
  // this.sourceHtmlService.sendScrapeInfo(this.scraperInfo).subscribe(
  //   data => {
  //     console.log(data)
    // });
  }
  
  loadWebsite(){

  }

    trackByFn(index, item) {
    return index; 
  }

 store(newValue){
   this.data.push(newValue);
   console.log(this.data)

   this.sourceHtmlService.sendSource(this.data).subscribe(
    data => {
      console.log(data)
    })
 }
}
