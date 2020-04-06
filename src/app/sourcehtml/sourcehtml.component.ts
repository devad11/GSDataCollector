import { Component, OnInit } from '@angular/core';
import { SourcehtmlService } from '../service/data/sourcehtml.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sourcehtml',
  templateUrl: './sourcehtml.component.html',
  styleUrls: ['./sourcehtml.component.css']
})
export class SourcehtmlComponent implements OnInit {

  sourcehtml: string

  selectors: Array<String>

  data = [];

  constructor(
    private sourceHtmlService: SourcehtmlService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sourceHtmlService.getSourceHtml().subscribe(
      data => this.sourcehtml = data
    );

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
