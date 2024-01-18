import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Service/data.service';
import { UserProfile } from 'src/app/Models/profileData';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
  // standalone:true
})
export class UpdateProfileComponent implements OnInit{
  updateProfileForm!:FormGroup
  profileUserData:{}={}
  userProfileData!: UserProfile;

  constructor(public dialogRef: MatDialogRef<UpdateProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder, private dataService:DataService
   ) { }

  ngOnInit(): void {
    this.updateProfileForm = this.fb.group({
      firstName:['',Validators.required],
      secondName:['',Validators.required],
      additionalName:[''],
      personType:['',Validators.required],
      headLine:['',Validators.required],
      currenPosition:['',Validators.required]
    })
  }
  onSubmit(){
    // const userFirstName = this.updateProfileForm.get('firstName')?.value
    // const userSecondName = this.updateProfileForm.get('secondName')?.value
    // const userAdditionalName = this.updateProfileForm.get('additionalName')?.value 
    // const userPersonType = this.updateProfileForm.get('personType')?.value
    // const userHeadline = this.updateProfileForm.get('headLine')?.value 
    // const userCurrenPosition = this.updateProfileForm.get('currenPosition')?.value 

    this.profileUserData = this.updateProfileForm.value   
    this.dataService.getUpdatedDataForProfile(this.profileUserData )
  }
  personTypes:any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];



closeDialog(): void {
this.dialogRef.close()
}
}
