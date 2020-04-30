import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL, API_URL } from 'src/app/app.constants';
import { ScraperInfo } from 'src/app/sourcehtml/sourcehtml.component';

@Injectable({
  providedIn: 'root'
})
export class SourcehtmlService {
  

  retrieveAllScraperInfo(username) {
    return this.http.get<ScraperInfo[]>(`${API_URL}/users/${username}/datacollector`);
  }

  constructor(
    private http:HttpClient
    ) { }

  getScrape(scrapeInfo) {
      return this.http.post(`${API_URL}/getwebscrape`, scrapeInfo);
  }

  getSourceHtml() {
      return this.http.get(`${API_URL}/webscrape`, {responseType: 'text'});
  }
  
  sendSource(selector) {
    return this.http.post(`${API_URL}/webscrape/selector`, selector)
  }

  sendScraperInfo(scrapeInfo){
    return this.http.post(`${API_URL}/webscrape/selector`, scrapeInfo)
  }

  getTableByName(tableName){
    return this.http.get(`${API_URL}/table/${tableName}`)
  }
}

