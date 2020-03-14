import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class SourcehtmlService {

  constructor(
    private http:HttpClient
    ) { }

    getSourceHtml() {
      return this.http.get<string>(`http://localhost:8080/webscrape`);
  }
}

