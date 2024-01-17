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
import { ImageComponent } from './Components/profile/image/image.component';
import { EditButtonComponent } from './Components/profile/edit-button/edit-button.component';
import { ProfileComComponent } from './Components/profile/profile-com/profile-com.component';
import { PublicProfSetComponent } from './Components/profile/public-prof-set/public-prof-set.component';

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
    PublicProfSetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
