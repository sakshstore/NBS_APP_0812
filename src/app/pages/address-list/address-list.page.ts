import { Component, OnInit } from '@angular/core';
import { AddAddressPage } from '../add-address/add-address.page';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.page.html',
  styleUrls: ['./address-list.page.scss'],
})
export class AddressListPage implements OnInit {
  address_list; show: any;
  constructor(private authService: AuthenticationService, public modalController: ModalController, private router: Router) { }


  ngOnInit() {


    this.getaddress();
  }


  getaddress() {
    this.authService.customer_address_list()
      .subscribe(
        data => {
          console.log(data);
          this.address_list = data;

          this.show = true;


        });
  }



  async addaddress() {

    const modal = await this.modalController.create({
      component: AddAddressPage,
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.2,

      componentProps: {

      }
    });
    modal.onDidDismiss()
      .then((data) => {
        this.authService.customer_address_list()
          .subscribe(
            data => {
              console.log(data);
              this.address_list = data;
            });
      });

    return await modal.present();

  }

  select(id) {
    window.localStorage.removeItem("address_id");
    window.localStorage.setItem("address_id", id);
    this.router.navigateByUrl('/machineform');
  }
}
