import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveDataFromApi() {
      return this.http.get<ApiDataService>("https://financialmodelingprep.com/api/v3/quote/AAPL,FB");
  }
}