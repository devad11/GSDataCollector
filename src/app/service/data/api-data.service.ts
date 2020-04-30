import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL, API_URL } from 'src/app/app.constants';
import { RegisterInfo } from 'src/app/register/register.component';

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

  sendRegister(registerInfo) {
    return this.http.post<string>(`${API_URL}/register`, registerInfo)
  }

    apiDataToBackend(apiData) {
    return this.http.post<string>(`${API_URL}/apidata`, apiData)
  }

  retrieveAllRequests() {
    return this.http.get<RegisterInfo[]>(`${API_URL}/requests`);
  }

  updateRequest(id: number, arg1: boolean) {
    return this.http.delete(`${API_URL}/request/${id}/accept/${arg1}`)
  }

  sendFile(file) {
    return this.http.post<String>(`${API_URL}/sendfile`, file)
  }
}