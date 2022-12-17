import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { JobService } from '../../job.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar) { }
addForm: FormGroup;
  currency: Transaction[];
  msg:any;
  balance:any;
  name:any;
email:any;
id:any;
user_balance:any;

  ngOnInit() {
  let id=window.localStorage.getItem("user_id1");
  let t3=window.localStorage.getItem("user_name");
  let t4=window.localStorage.getItem("user_email");
    let t5=window.localStorage.getItem("user_balance");
    let t6=window.localStorage.getItem("admin_balance");
this.name=t3;
  this.email=t4;
  this.id=id;
  this.user_balance=t5;

  
   this.balance=t6;
       alert(this.balance);

  
   let t=window.localStorage.getItem("user_id1");
   this.addForm = this.formBuilder.group({

      id: [],
      amount: ['', Validators.required], 
      coin: ['USD', Validators.required], 
       type: ['', Validators.required], 
    });
  }
  onSubmit() {

     window.localStorage.removeItem("amount");
        window.localStorage.setItem("amount",this.addForm.value.amount  );
             window.localStorage.removeItem("coin");
        window.localStorage.setItem("coin",this.addForm.value.coin  );
             window.localStorage.removeItem("type");
        window.localStorage.setItem("type",this.addForm.value.type  );
        this.router.navigate(['confirm-payment']);

  }

}
