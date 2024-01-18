import { Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../Components/update-profile/update-profile.component';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  constructor(private dialog:MatDialog){}
   userProfileData:any
  
  ngOnInit() {
    // This is a lifecycle hook that runs after the component has been initialized
    console.log("ngOnInit:", this.userProfileData);

  }
  
  getUpdatedDataForProfile(data:any) {
    // This is an example method that might be called later
    this.userProfileData = data;
    console.log("After assignment:", this.userProfileData);
  }

  openModalComponent(data: any) {
    this.dialog.open(UpdateProfileComponent, {
      data: { inputData: data }
    });
  }
}
