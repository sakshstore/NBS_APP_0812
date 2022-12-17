import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }
  editForm: FormGroup;
  products_list;
  customer_list;
  address_list;
  id;
  ngOnInit(): void {

    this.jobService.product_list()
      .subscribe(
        data => {
          console.log(data);
          this.products_list = data['data'];
        });

    this.jobService.customer_report()
      .subscribe(data => {
        console.log(data);
        this.customer_list = data;

      });

    this.id = this.activatedRoute.snapshot.params.id;
    this.editForm = this.formBuilder.group({
      id: [''],
      customer_id: [''],
      product_name: [''],
      grand_total: [''],
      address: [''],
      discount: ['10'],
      service_tax: [''],
      shipping_charge: [''],
      coupons: [''],
      applied_coupons: ['13'],
      pay_method: [''],
      uid: [159],
      orders: ['yes'],
      total: [100]

    });

    this.jobService.edit_order_details(+this.id)
      .subscribe(data => {
        this.editForm.setValue(data['data']);


      });

  }

  address(id) {
    //alert(id);
    this.jobService.address_bycustomer(id)
      .subscribe(data => {
        console.log(data);
        this.address_list = data;

      });

  }

  onSubmit() {
    this.jobService.update_order(this.editForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          this.router.navigate(['ecommerce/order-list']);
        });

    // this.getproduct_list();
    // this.modalService.dismissAll(this);
  }

}
