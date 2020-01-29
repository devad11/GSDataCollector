import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password){
    if (username === 'adam' && password === 'password') {
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    else{
      return false;
    }
  }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('authenticaterUser')
      return !(user === null)
    }

    logout() {
      sessionStorage.removeItem('authenticaterUser')
    }


}
