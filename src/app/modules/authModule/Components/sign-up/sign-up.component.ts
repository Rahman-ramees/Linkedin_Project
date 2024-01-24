import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Service/auth.service';
import { UserAuthService } from 'src/app/Service/user-auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  signupSuccess = false
  // signupDataArray: any[] = [];

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    // Handle form submission logic here
    if(this.signupForm.valid) {
      // Extract form values and push them into the array
      // const signupData = this.signupForm.value;
      // this.signupDataArray.push(signupData);

      this.authService.register(this.signupForm.value).subscribe((data) => {
        if (data.success) {
          // Set signup success flag to true
          this.signupSuccess = true;

          // Optionally, you can clear the form after submission
          this.signupForm.reset();
        } else {
          // SHow error message
        }
      })


    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }

}
