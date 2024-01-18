import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{
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
}
