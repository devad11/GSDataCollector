import { Component, OnInit } from '@angular/core';
import { SourcehtmlService } from '../service/data/sourcehtml.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  tableName: string;

  items: any;
  item = [
    {
      "symbol": "AAPL",
      "name": "Apple Inc.",
      "price": 287.05,
      "changesPercentage": 5.05,
      "change": 13.8,
      "dayLow": 278.05,
      "dayHigh": 288.05,
      "yearHigh": 327.85,
      "yearLow": 170.27,
      "marketCap": 1255981449216,
      "priceAvg50": 264.1397,
      "priceAvg200": 274.07846,
      "volume": 48748672,
      "avgVolume": 50532817,
      "exhange": "NASDAQ",
      "open": 280,
      "previousClose": 273.25,
      "eps": 12.595,
      "pe": 22.790789,
      "earningsAnnouncement": "2020-05-01T00:00:00.000+0000",
      "sharesOutstanding": 4375479808,
      "timestamp": 1586947319
    },
    {
      "symbol": "FB",
      "name": "Facebook, Inc.",
      "price": 178.17,
      "changesPercentage": 1.93,
      "change": 3.38,
      "dayLow": 176.62,
      "dayHigh": 181.225,
      "yearHigh": 224.2,
      "yearLow": 137.1,
      "marketCap": 507923464192,
      "priceAvg50": 169.46915,
      "priceAvg200": 192.80595,
      "volume": 20527361,
      "avgVolume": 22660003,
      "exhange": "NASDAQ",
      "open": 178.977,
      "previousClose": 174.79,
      "eps": 6.43,
      "pe": 27.709177,
      "earningsAnnouncement": "2020-04-30T00:00:00.000+0000",
      "sharesOutstanding": 2405750016,
      "timestamp": 1586947319
    }
  ]

  constructor(
    private sourceHtmlService: SourcehtmlService
  ) { }

  ngOnInit() {
    this.tableName = "shares"
    this.getTableByName(this.tableName)
  }

  getTableByName(tableName){
    this.sourceHtmlService.getTableByName(tableName).subscribe(
          data => {
            console.log(data)
            this.items = data
          });
  }

}
