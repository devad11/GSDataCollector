import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'adam'
  password = 'password'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router : Router,
    private hardcodedAuthService : HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    else {
      this.invalidLogin = true
    }
  }

}
