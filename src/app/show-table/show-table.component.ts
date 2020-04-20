import { Component, OnInit } from '@angular/core';
import { SourcehtmlService } from '../service/data/sourcehtml.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  tableName = "";
  items: any;

  constructor(
    private sourceHtmlService: SourcehtmlService
  ) { }

  ngOnInit() {
  }

  getTableByName(tableName: string){
    console.log("this is tablename: " + tableName);
    this.sourceHtmlService.getTableByName(tableName).subscribe(
          data => {
            console.log(data)
            this.items = data
          });
  }

  store(newValue){
    this.tableName = newValue;
    this.getTableByName(this.tableName)
  }

}
