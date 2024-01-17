import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { HomeComponent } from './Components/home/home.component';
import { authGuard } from './shared/auth.guard';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'signup',
    component:SignUpComponent
  },{
    path:'profile',
    component:ProfileComponent
  },{
    path:'login',
    component:LogInComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
