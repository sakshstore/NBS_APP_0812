import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { ModalController } from '@ionic/angular';

import { AddAddressPage } from '../add-address/add-address.page';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  id;
  productDetail; address_list_count;

  productDetails: any;
  name;
  descriptions;
  cover; active_address; show;
  original_price; address_list; active_address_id;
  constructor(private authService: AuthenticationService,
    public modalController: ModalController,
    private router: Router,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.show = false;
    this.id = this.activatedRoute.snapshot.params.id;
    this.getaddress();


    this.active_address_id = localStorage.getItem('address_id');




  }

  d() {

    this.router.navigate(['payment']);
  }

  backbtn() {

    this.router.navigate(['/tabs/tab1']);
  }
  getaddress() {
    this.authService.customer_address_list()
      .subscribe(
        data => {
          console.log(data);
          this.address_list = data;

          this.show = true;

          this.address_list_count = this.address_list.length;


        });
  }

  async addaddress() {

    const modal = await this.modalController.create({
      component: AddAddressPage,
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 1,

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

  /*
    select11(id) {
      window.localStorage.removeItem("address_id");
  
  
  
      window.localStorage.setItem("address_id", id);
      this.router.navigateByUrl('/payment/order');
  
   
    }
  
  
  */

  items: any;
  select(id) {


    var test = localStorage.getItem('cart_items');
    this.items = JSON.parse(test);



    var address_id = localStorage.getItem('address_id');


    const products = this.cartService.getItems();


    products.forEach(element => {

      const cart_product = {
        id: element['id'],

        quantity: element['quantity'],

        original_price: element['original_price']
      };


      // this.items.push(cart_product);
    });



    const order = {

      products: this.items,
      address_id: address_id,
      payment_method: "qrcode"
    };

    console.log(order);


    this.authService.add_new_order(order)
      .subscribe((data) => {
        console.log("data", data);


        /*
        const toast = this.toastController.create({
          position: 'top',
          color: 'dark',
          message: data['message'],
          duration: 10000,


        });
        */

        if (!data['Error'])
          this.cartService.clearCart();




        this.router.navigate(['order/order-detail', data['order_id']]);


      });

  }

}
