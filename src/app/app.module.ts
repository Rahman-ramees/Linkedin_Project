import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ImageComponent } from './shared/image/image.component';
import { EditButtonComponent } from './shared/edit-button/edit-button.component';
import { ProfileComComponent } from './shared/profile-com/profile-com.component';
import { PublicProfSetComponent } from './shared/public-prof-set/public-prof-set.component';
import { UpdateProfileComponent } from './Components/update-profile/update-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FeedModule } from './modules/feed/feed.module';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    ImageComponent,
    EditButtonComponent,
    ProfileComComponent,
    PublicProfSetComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FeedModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
