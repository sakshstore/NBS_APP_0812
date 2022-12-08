import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import { CartService } from '../../cart.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  itemSizes;
  colors;
  productDetail;
  id;
  productDetails: any;
  name;
  descriptions; show;
  cover;
  product: Product;
  original_price;

  set_quantity: FormGroup;


  constructor(private authService: AuthenticationService,
    private router: Router,
    private cartService: CartService,
    private fb: FormBuilder, public toastController: ToastController,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.show = false;

    this.id = this.activatedRoute.snapshot.params.id;



    this.set_quantity = this.fb.group({

      quantity: ['10', [Validators.required]]
    });



    this.authService.edit_product_details(+this.id)
      .subscribe(data => {
        this.productDetails = data['data'];


        this.set_quantity.controls['quantity'].setValue(data['data']['wholesale_min_quantity']);

        //  this.set_quantity.controls['quantity'].setValue(1111);

        this.product = {
          id: data['data']['id'],
          cover: data['data']['cover'],
          name: data['data']['name'],
          descriptions: data['data']['descriptions'],

          quantity: data['data']['wholesale_min_quantity'],
          net_price: 0,
          wholesale_price: data['data']['wholesale_price'],
          original_price: data['data']['original_price']
        };



        this.customer_browsing_history(+this.id);
        this.show = true;
      });


    // this.productDetail = ['imgUrl' /assets/images.jpg'];



  }
  set_cart_quantity(){

   
    this.product.quantity = this.set_quantity.value.quantity;


    this.product.net_price = this.product.wholesale_price * this.product.quantity;
  }

  addToCart() {


    this.product.quantity = this.set_quantity.value.quantity;


    this.product.net_price = this.product.wholesale_price * this.product.quantity;

    this.cartService.addToCart(this.product);


    const toast = this.toastController.create({
      position: 'top',
      color: 'dark',
      message: 'Your product has been added to the cart!',
      duration: 10000,


    });
    console.log(this.cartService.getItems());

    this.router.navigate(['cart']);

  }



  buyNow() {
    this.router.navigate(['basket', this.id]);


  }

  gotocart() {
    this.router.navigate(['cart']);

  }
  customer_browsing_history(id: any) {

    this.authService.customer_browsing_history(id)
      .subscribe((data) => {

      });
  }
}
