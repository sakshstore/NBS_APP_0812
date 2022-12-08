import { Injectable } from '@angular/core';



import { Storage } from '@capacitor/storage';


import { BehaviorSubject, Subject } from 'rxjs';



import { Product } from 'src/app/model/product';


@Injectable({
  providedIn: 'root'
})


export class CartService {
  product: Product;
  token: any;
  items_list = new Subject<any>();
  items: any[] = [];
  constructor() {

    //alert(27);
    //  this.getItems()
  }




  addToCart(product: any) {


    console.log(product);


    var old_items = localStorage.getItem('cart_items');



    if (old_items === null) {
      const product_array = [product];

      let json = JSON.stringify(product_array);
      localStorage.setItem('cart_items', json);


    }
    else {
      this.items = JSON.parse(old_items);
      this.increaseQty(product);



    }


  }
  increaseQty(product) {
    let product_found = false;

    this.items.forEach((item) => {

      if (item.id == product.id) {

        item.quantity = parseInt(product.quantity);

        product_found = true;

      }
      else {
        console.log(product.id + "quantity not increased" + item.id);
      }

    });


    if (!product_found)
      this.items.push(product);


    let json = JSON.stringify(this.items);
    localStorage.setItem('cart_items', json);


  }

  getItems() {


    var test = localStorage.getItem('cart_items');
    this.items = JSON.parse(test);
    console.log(test);

    this.items_list.next(test);
    return this.items;



  }




  clearCart() {
    this.items = [];


    window.localStorage.removeItem("cart_items");


    return this.items;
  }


}
