import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  observeSignup = new EventEmitter();

  constructor(private http: HttpClient, private router:Router) { }

  checkDBuser() {
    const token = localStorage.getItem('signupDataArray');
    if (token) {
      return token
    } else {
      return false;
    }
  }

  matchUser(formData:any){                    

    // Get existing data from localstorage
    let existingUsers = JSON.parse(localStorage.getItem("signupDataArray") || '[]')
    let userEmail = formData.email
    let userPass = formData.password
    
    if (formData) {
        // Use the find method to find a user with a specific email
        let matchingUser = existingUsers.find((user: any) => user.email === userEmail && user.password === userPass);

        if (matchingUser) {
          // User with the specified email found
         console.log('Matching user found:', matchingUser);
         alert('Matching user found')
         this.router.navigate(['/feed'])
        } else {
          // User with the specified email not found
          console.log('User not found with email:', userEmail);
          alert("Check your Email or Password")
        }
      }
  }

  register(formData: any) {
    // Get existing data from localstorage
    let existingUsers = JSON.parse(localStorage.getItem("signupDataArray") || '[]')

    // Push new data to existing array
    existingUsers.push(formData);

    // Set all value to localStorage
    localStorage.setItem('signupDataArray', JSON.stringify(existingUsers));

    // Emit observable
    this.observeSignup.emit({ success: true, data: formData, message: 'successfully signed in' });

    return this.observeSignup;
  }
}
