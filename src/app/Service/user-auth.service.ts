import { Injectable } from '@angular/core';
type SignupData = [string, string, string, string];

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  signupDataArray: SignupData[] = [];

  constructor() {}
}
