import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { Transaction } from 'src/app/models/transaction.model';

 import { User } from 'src/app/models/user.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-withdraws',
  templateUrl: './user-withdraws.component.html',
  styleUrls: ['./user-withdraws.component.css']
})

export class UserWithdrawsComponent implements OnInit {

addForm: FormGroup;
currencies:User[];
user_data;
api_key;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal) { }


 ngOnInit(): void {

 this.jobService.getuserById()
      .subscribe( data => {
         console.log(data);
        this.user_data = data.BTC ;

 this.api_key = data.api_key ;

      });

 this.jobService.currencylist()
      .subscribe( data => {
      
        this.currencies = data ;
        console.log("data",data);

        });


  this.addForm = this.formBuilder.group({
      id: [],
      coin: ['', Validators.required], 
      
      to: ['', Validators.required], 
      amount: ['', Validators.required], 
     
      amount_coin: [''],
      description: ['', Validators.required],
       network_fee: ['', Validators.required],   
    });
  }
onSubmit() {

    this.jobService.withdraw_payment(this.addForm.value)
      .subscribe( data => {
	this._snackBar.open("Send Payment successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
      //alert("Send Payment successfully");
      });
  }


}
