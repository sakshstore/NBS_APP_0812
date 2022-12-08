import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartService } from '../cart.service';


import { BehaviorSubject, Subject } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Product } from '../model/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})


export class CartComponent implements OnInit {



  items: any;
  private readonly onDestroy = new Subject<void>();
  testdata: any;
  constructor(private authService: AuthenticationService, private router: Router,
    private activatedRoute: ActivatedRoute, private cartService: CartService) { }







  ngOnInit() {


    this.items = this.cartService.getItems();


    //  subject.subscribe



    //  console.log("this.items");
    //  console.log("this.items");


    //console.log(this.items);
    //console.log("this.items");
    //
    /*
         setInterval(() => {
           
           
         this.items = this.cartService.getItems();
     
         console.log(   this.items );
     
           }, 1000);
           
   
   */


  this.getData();

  }
  getData() {
    this.cartService.items_list.subscribe(d => {

      this.testdata = "susheel";
      //   console.log("inside1");
      this.items = JSON.parse(d);
      //   console.log("this.items111111");
      //  console.log(this.items); console.log("this.items2222");
      //    this.changeDetectRef.detectChanges();
      console.log(this.items); console.log("inside2");
    });

  }

  checkout() {

    this.router.navigate(['checkout', 2]);
  } backbtn() {

    this.router.navigate(['/tabs/tab1']);
  }


  clearcart() {

    this.cartService.clearCart();
    this.router.navigate(['/tabs/tab1']);


    //this.items = this.cartService.getItems();
  }
  gotodetails(id) {
    this.router.navigate(['product-details', id]);

  }
}




