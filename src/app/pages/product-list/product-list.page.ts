import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';



import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  addForm: FormGroup;
  msg;
  products_list;
  query_id;
  query;
  constructor(public toastController: ToastController, private formBuilder: FormBuilder,
    private authService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.query_id = this.activatedRoute.snapshot.params.query_id;
    this.query = this.activatedRoute.snapshot.params.query;


    this.authService.query_product_list(this.query, this.query_id)
      .subscribe(data => {
        console.log(data);
        this.products_list = data;



      });
  }

  gotocart() {
    this.router.navigate(['cart']);

  }
  gotodetails(id) {
    this.router.navigate(['product-details', id]);

  }

  getproduct_list() {
    this.authService.product_list()
      .subscribe(
        data => {
          console.log(data);
          this.products_list = data['data'];
        });

  }

}
