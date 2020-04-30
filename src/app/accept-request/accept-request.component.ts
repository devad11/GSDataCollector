import { Component, OnInit } from '@angular/core';
import { RegisterInfo } from '../register/register.component';
import { ApiDataService } from '../service/data/api-data.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication-service';

@Component({
  selector: 'app-accept-request',
  templateUrl: './accept-request.component.html',
  styleUrls: ['./accept-request.component.css']
})
export class AcceptRequestComponent implements OnInit {

  registerInfos: RegisterInfo[]
  id: number

  constructor(
    private apiDataService: ApiDataService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService

  ) { }

  ngOnInit() {

    this.refreshTodo();
  }
  refreshTodo() {
    this.apiDataService.retrieveAllRequests().subscribe(
      response => {
        console.log(response);
        this.registerInfos = response;
      }
    );
  }

  deleteRequest(id){
    this.apiDataService.updateRequest(id, false).subscribe(
      data => {
        console.log(data)
        this.refreshTodo();
      }
    )
  }

  updateRequest(id){
    this.apiDataService.updateRequest(id, true).subscribe(
      data => {
        console.log(data)
        this.refreshTodo();
      }
    )
  }

}
