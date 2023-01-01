
	
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { filter, map, take } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router) { }
 
  canLoad(): Observable<boolean> {    
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
       
       
        if (localStorage.getItem('login_status')) {
          // Directly open inside area  
          //alert('Found previous token, automatic login'+isAuthenticated);

          this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });
        } else {         
         // alert(' no automatic login'+isAuthenticated); 
          // Simply allow access to the login
          return true;
        }
      })
    );
  }
}
