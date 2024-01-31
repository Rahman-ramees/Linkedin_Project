import { Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../modules/profileModule/Components/update-profile/update-profile.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  private userProfileDataSubject = new BehaviorSubject<any>(null);
  userProfileData$: Observable<any> = this.userProfileDataSubject.asObservable();

  constructor(private dialog: MatDialog) {}

  getUpdatedDataForProfile(data: any) {
    this.userProfileDataSubject.next(data);
  }

  openModalComponent(data: any) {
    this.dialog.open(UpdateProfileComponent, {
      data: { inputData: data }
    });
  }
}
