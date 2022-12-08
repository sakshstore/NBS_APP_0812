import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
randNumber:any;
show:boolean=false;
  constructor( private authService: AuthenticationService,
     private router: Router) {}

  ngOnInit() {

  }


submit(){
   	    this.router.navigateByUrl('product-details');

  }
 async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
