import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { BasicAuthenticationService } from '../service/basic-authentication-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  username: string;

  constructor(private hardcodedAuthService : HardcodedAuthService,
    private basicAuthenticationService: BasicAuthenticationService
    ) { }

  ngOnInit() {
    this.username = this.basicAuthenticationService.getAuthenticatedUser();
    console.log(this.basicAuthenticationService.getAuthenticatedUser());
  }

  

}
