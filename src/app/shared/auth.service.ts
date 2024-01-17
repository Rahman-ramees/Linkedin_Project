import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkDBuser(){
    const token = localStorage.getItem('signupDataArray');
    if(token) {
      return token
    } else {
      return false;
    }
  }
}
