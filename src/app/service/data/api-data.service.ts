import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL, API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveDataFromApi(apiAddress) {
      return this.http.get<ApiDataService>(apiAddress);
  }

  // apiDataToBackend(apiData) {
  //   return this.http.post<string>(`${API_URL}/apidata`, apiData)

    apiDataToBackend(apiData) {
    return this.http.post<string>(`${API_URL}/apidata`, apiData)
  }
}