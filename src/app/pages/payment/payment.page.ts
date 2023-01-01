
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import { CartService } from '../../cart.service';

import { FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { Product } from 'src/app/model/product';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  case: any;

  total: any = 0;

  qrcode;
  payment_link;

  items: Product[] = [];


  showOrder; showJobWork;


  constructor(private authService: AuthenticationService,
    private router: Router,
    private cartService: CartService,
    private fb: FormBuilder, public toastController: ToastController,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit() {


    this.showOrder = false;
    this.showJobWork = false;


    this.getPaymentInfo();


  }



  backbtn() {

    this.router.navigate(['/tabs/tab1']);
  }

  getPaymentInfo() {

    this.case = this.activatedRoute.snapshot.params.case;


    if (this.case == "jobwork") {


this.submitJobWork();

      // var test = localStorage.getItem('job_work_json');
      // this.job_work_json = JSON.parse(test);


      //this.total = 1000;

     // this.showJobWork = true;
    }
    else {


      this.showOrder = true;


      var test = localStorage.getItem('cart_items');
      this.items = JSON.parse(test);

      console.log(this.items);




      this.items.forEach(element => {

        this.total = parseInt(element.net_price) + parseInt(this.total);

        this.total = parseInt(this.total);



        this.showOrder = true;
      });


   










    }

  }


  submitJobWork() {



    var job_work_json = localStorage.getItem('job_work_json');
    let job_work_details = JSON.parse(job_work_json);


    this.authService.add_job_work(job_work_details)
      .subscribe((data) => {
        console.log("data", data);
        const toast = this.toastController.create({
          position: 'top',
          color: 'dark',
          message: data['message'],
          duration: 10000,


        });
        window.localStorage.removeItem("job_work_id");
        window.localStorage.setItem("job_work_id", data['job_work_id']);



        this.router.navigate(['complain-details']);


        //this.close.emit(null);


      });



  }

  submitOrder() {




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
        const toast = this.toastController.create({
          position: 'top',
          color: 'dark',
          message: data['message'],
          duration: 10000,


        });

        if (!data['Error'])
          this.cartService.clearCart();

        


        this.router.navigate(['order/order-detail', data['order_id']]);


      });

  }

  sendevent() {


    //  this.open.emit("open");

  }
  OnOpen($event) {

    console.log($event);
    console.log("open");
  }
  onClose($event) {

    console.log("open");
    console.log("open");
  }
}
