import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/order.model';




@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})


export class OrderHistoryComponent implements OnInit {

  searchForm: FormGroup;
  orders_history: Order[];
  show: boolean = false;
  date;

  backgroundColor:string="primary";
  ordersearchForm: FormGroup;
  order_id;
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }


  ngOnInit(): void {


    this.date = this.activatedRoute.snapshot.params.date;
    // if(this.date){
    this.jobService.orders_history(this.date)
      .subscribe(
        data => {

          this.orders_history = data;
          console.log(data);
        });

    this.searchForm = this.formBuilder.group({
      date_search: [''],
    });

    this.ordersearchForm = this.formBuilder.group({
      order_id: [''],
    });

  }

  add() {
    this.router.navigate(['order/add-order']);
  }
  search() {
    // alert(this.searchForm.value.date_search);
    this.jobService.orders_history(this.searchForm.value.date_search)
      .subscribe(
        data => {

          this.orders_history = data;
          console.log(data);


        });
  }

  edit(id) {
    this.router.navigate(['order/edit-order', id]);
  }

  delete(id) {

    this.jobService.delete_order(+id)
      .subscribe(data => {
        console.log(data);

        this._snackBar.open(data['message'], "Close", {
          duration: 2000,

          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      });



  }

  ordersearch() {
    this.order_id = this.ordersearchForm.value.order_id;
    this.router.navigate(['order/order-details', this.order_id]);
  }



  sendto(order_id) {

    this.router.navigate(['order/order-details', order_id]);

  }


}
