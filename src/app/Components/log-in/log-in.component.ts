import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAuthService } from 'src/app/Service/user-auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  loginForm!: FormGroup;
  signInSuccess = false;

  constructor(private fb: FormBuilder, private authService: UserAuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  

  onSubmit() {
    
    if (this.loginForm.valid) {
      const userEmail = this.loginForm.get('email')!.value
      const userPass = this.loginForm.get('password')!.value

      const signedUserFromLocalStgString = localStorage.getItem('signupDataArray');

if (signedUserFromLocalStgString) {
  // Parse the string into an array or create an array with a single user object
  const signedUserFromLocalStg = JSON.parse(signedUserFromLocalStgString) as any[];
  
  // If it's not an array, convert it to an array
  const userArray = Array.isArray(signedUserFromLocalStg) ? signedUserFromLocalStg : [signedUserFromLocalStg];

  // Use the find method to find a user with a specific email
  const matchingUser = userArray.find((user: any) => user.email === userEmail && user.password === userPass);

  if (matchingUser) {
    // User with the specified email found
    console.log('Matching user found:', matchingUser);
  } else {
    // User with the specified email not found
    console.log('User not found with email:', userEmail);
  }
}

    }
    
  
  }
}
