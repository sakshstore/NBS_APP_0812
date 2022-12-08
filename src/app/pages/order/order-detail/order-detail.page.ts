import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {
  order_id;
  date;
  orderDetail: any;
  product_name;
  quantity;
  original_price;
  status;
  order_status;
  description;
  city;
  pincode;
  address; products_count;
  pay_method; payment_method; payment_status; customer_address;
  name; items; total; shipping_status; shipping_details; show;
  constructor(private route: ActivatedRoute, private router: Router, private orderService: AuthenticationService) { }

  ngOnInit() {
    this.show = false;

    this.loaddata();
  }



  loaddata() {

    this.order_id = this.route.snapshot.params.order_id;





    this.orderService.get_order_details(+this.order_id)
      .subscribe(data => {
        console.log(data);
        this.show = true;
        console.log(this.show);

        this.status = data['order']['order_status'];
        this.total = data['order']['total'];
        this.date = data['order']['created_at'];

        this.items = data['order']['product_list'];
        this.products_count = this.items.length;

        this.city = data['order']['customer_address']['city'];

        this.pincode = data['order']['customer_address']['pincode'];
        this.customer_address = data['order']['customer_address'];






        this.shipping_status = data['order']['shipping']['status'];

        this.shipping_details = data['order']['shipping']['shipping_details'];


        this.payment_method = data['order']['payment_method'];
        this.payment_status = data['order']['payment_status'];


      });

    this.orderService.edit_productbyid(+this.order_id)
      .subscribe(data => {
        this.orderDetail = data;

        this.quantity = data['quanity'];
        // this.product_name = data['data']['product_name'];
        this.original_price = data['product_selling_price'];
        // this.status = data['data']['status'];


        // alert(this.editForm.value.cover);

      });



  }


  backbtn() {

    this.router.navigate(['/tabs/tab1']);
  }


  makepayment()
  {
   // window.open('https://nbsadmin.sakshstore.com/upi.php?order_id='+this.order_id);

   this.router.navigate(['/tabs/tab1']);
  }

  doRefresh(event) {
    this.loaddata();
  }



}
