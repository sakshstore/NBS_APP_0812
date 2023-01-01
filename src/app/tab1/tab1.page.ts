

import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddMachinePage } from '../pages/add-machine/add-machine.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  machine_list;
  category_list;
  products_list;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,

    // autoplay:true
  };
  constructor(public modalController: ModalController,
    private authService: AuthenticationService, private router: Router) { }
  showdata: any;

  ngOnInit() {

    this.showdata = false;

    this.getbrowsing_history();
    this.getcategory_list();
  }

  getbrowsing_history() {
    this.authService.browsing_history()
      .subscribe(
        data => {
          console.log(data);
          this.products_list = data;


          this.showdata = true;
        });
  }

  getcategory_list() {

    this.authService.category_list()
      .subscribe(
        data => {
          console.log("data", data);
          this.category_list = data['data'];
          
        });

  }

  sendtoproduct(query, id) {
    this.router.navigate(['product-list', query, id]);
  }
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }



  gotodetails(id) {
    this.router.navigate(['product-details', id]);

  }

}
