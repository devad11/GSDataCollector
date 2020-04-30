import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL, API_URL } from 'src/app/app.constants';
import { ScraperInfo } from 'src/app/sourcehtml/sourcehtml.component';

@Injectable({
  providedIn: 'root'
})
export class SourcehtmlService {

  constructor(
    private http:HttpClient
    ) { }

  retrieveAllScraperInfo(username) {
    return this.http.get<ScraperInfo[]>(`${API_URL}/users/${username}/datacollector`);
  }

  retrieveInfo(id: number) {
    return this.http.get<ScraperInfo>(`${API_URL}/info/${id}`);
  }

  getScrape(scrapeInfo) {
      return this.http.post(`${API_URL}/getwebscrape`, scrapeInfo);
  }

  updateInfo(id: number, scraperInfo: ScraperInfo) {
    return this.http.put<ScraperInfo>(`${API_URL}/updateinfo/${id}`, scraperInfo)
  }

  deleteInfo(id: any) {
    return this.http.delete(`${API_URL}/deleteinfo/${id}`)
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

