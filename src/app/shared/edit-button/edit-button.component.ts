import { Component } from '@angular/core';
import { UpdateProfileComponent } from 'src/app/Components/update-profile/update-profile.component';
import { DataService } from 'src/app/Service/data.service';
@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent {
  constructor(private dataService:DataService){}
  openProfileComponent(){
    this.dataService.openModalComponent("hiii")
  }

  
}
