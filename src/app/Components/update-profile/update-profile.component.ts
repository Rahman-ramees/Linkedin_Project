import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Service/data.service';
import { UserProfile } from 'src/app/Models/profileData';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
  // standalone:true
})
export class UpdateProfileComponent implements OnInit{


updateProfileForm!: FormGroup;
  profileUserData: any = {};
  userProfileDataSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<UpdateProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.userProfileDataSubscription = this.dataService.userProfileData$.subscribe(
      (data) => {
        this.profileUserData = data;
      }
    );
  }

  ngOnInit(): void {
    this.updateProfileForm = this.fb.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
      additionalName: [''],
      personType: ['', Validators.required],
      headLine: ['', Validators.required],
      currenPosition: ['', Validators.required],
    });

    // Set initial form values
    this.updateProfileForm.patchValue(this.profileUserData);
  }

  onSubmit() {
    this.profileUserData = this.updateProfileForm.value;
    this.dataService.getUpdatedDataForProfile(this.profileUserData);
    this.dialogRef.close();
  }

  personTypes: any[] = [
    { value: 'Male-0', viewValue: 'Mail' },
    { value: 'Femail-1', viewValue: 'Femail' },
    { value: 'Others-2', viewValue: 'Others' },
  ];

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.userProfileDataSubscription.unsubscribe();
  }
}
