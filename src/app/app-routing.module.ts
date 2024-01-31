import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './modules/authModule/Components/sign-up/sign-up.component';
import { LogInComponent } from './modules/authModule/Components/log-in/log-in.component';
import { HomeComponent } from './Components/home/home.component';
import { authGuard } from './Service/auth.guard';
import { ProfileComponent } from './modules/profileModule/Components/profile/profile.component';
import { UpdateProfileComponent } from './modules/profileModule/Components/update-profile/update-profile.component';

const routes: Routes = [
  {
    path:'feed',
    component:HomeComponent
  },{
    path:'signup',
    component:SignUpComponent
  },{
    path:'profile',
    component:ProfileComponent
  },{
    path:'updateprofile',
    component:UpdateProfileComponent
  },{
    path:'',
    component:LogInComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
