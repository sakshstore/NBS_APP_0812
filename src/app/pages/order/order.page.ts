import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

import { Router } from '@angular/router';


import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orders_list:any;
  constructor( public toastController: ToastController,private formBuilder: FormBuilder,
     private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
 this.getorder_list() ;
// this.orders = [
//   {'name' : 'answer1' },
//   {'orderDate' : 'answer2' },
//   {'orderNo' : 'answer3' }
// ];
    // this.orders =['name:skjds','orderDate:5845','orderNo:584598'];
  }

  
  getorder_list() {
    this.authService.order_list()
      .subscribe(
        data => {
          console.log(data);
          this.orders_list = data;
        });

  }


  doRefresh(event) {
    this.getorder_list();
  }



}
