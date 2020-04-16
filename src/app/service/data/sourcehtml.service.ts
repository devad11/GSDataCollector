import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL, API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SourcehtmlService {

  constructor(
    private http:HttpClient
    ) { }

    getSourceHtml() {
      return this.http.get(`${API_URL}/webscrape`, {responseType: 'text'});
  }
  
  sendSource(selector) {
    return this.http.post(`${API_URL}/webscrape/selector`, selector)
  }

  sendScrapeInfo(scrapeInfo){
    return this.http.post(`${API_URL}/webscrape/selector`, scrapeInfo)
  }

  getTableByName(tableName){
    return this.http.get(`${API_URL}/table/${tableName}`)
  }
}

