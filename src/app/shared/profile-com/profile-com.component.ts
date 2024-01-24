import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-profile-com',
  templateUrl: './profile-com.component.html',
  styleUrls: ['./profile-com.component.scss']
})
export class ProfileComComponent implements OnDestroy{
  
  UpdatedUserData: any;
  userProfileDataSubscription: Subscription;

  constructor(private dataService: DataService) {
    this.userProfileDataSubscription = this.dataService.userProfileData$.subscribe(
      (data) => {
        this.UpdatedUserData = data;
        console.log(data);
      }
    );
  }

  ngOnDestroy() {
    this.userProfileDataSubscription.unsubscribe();
  }
    

    
}
