import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn =( 
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
  ) =>  {
  const authService = inject(AuthService);
  const router = inject(Router);
  const token =  authService.checkDBuser();
  if(token) {
    return true;
  } else {
    alert("Create new account")
    router.navigate(['/signup']);
    return false;
  }
}