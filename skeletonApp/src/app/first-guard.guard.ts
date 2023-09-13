import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class FirstGuardGuard{

  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("--> FirstGuardGuard.canActivate()");
    if (!localStorage.getItem('isUserLoggedIn')) {
      console.log(localStorage.getItem('isUserLoggedIn'));
      this.router.navigate(['/Login']);
      return false;
    }
    return true;
  }
  
}
