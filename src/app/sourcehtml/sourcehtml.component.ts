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

  constructor(
    private sourceHtmlService: SourcehtmlService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sourceHtmlService.getSourceHtml().subscribe(
      data => console.log(data)
      // this.sourcehtml = data
    );
  }

}
