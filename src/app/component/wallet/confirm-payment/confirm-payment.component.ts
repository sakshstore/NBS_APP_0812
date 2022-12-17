import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { JobService } from '../../job.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.component.html',
  styleUrls: ['./confirm-payment.component.css']
})

export class ConfirmPaymentComponent implements OnInit {



  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar) { }

  amount:any;
coin:any;
type:any;
name:any;
email:any;
id:any;
addForm: FormGroup;
  currency: Transaction[];
  msg:any;
  balance:any;

  ngOnInit(): void {
let id=window.localStorage.getItem("user_id1");
  let t=window.localStorage.getItem("amount");
  let t1=window.localStorage.getItem("coin");
  let t2=window.localStorage.getItem("type");
let t3=window.localStorage.getItem("user_name");
  let t4=window.localStorage.getItem("user_email");


this.name=t3;
  this.email=t4;
  this.id=id;

  this.amount=t;
  this.coin=t1;
  this.type=t2;

   this.addForm = this.formBuilder.group({

      id: [id],
      amount: [this.amount], 
      coin: [this.coin], 
       type: [this.type], 
    });
  }


  confirm() {

    this.jobService.payment_user(this.addForm.value)
      .subscribe( data => {
        this.msg=data['Message'];
  this._snackBar.open(this.msg, "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
   });
    this.router.navigate(['bank-account']);

}

}
