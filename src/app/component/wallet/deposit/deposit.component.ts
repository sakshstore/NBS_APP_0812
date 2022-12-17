import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { Transaction } from 'src/app/models/transaction.model';

import {animate, state, style, transition, trigger} from '@angular/animations';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DepositComponent implements OnInit {
dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

transactions : Transaction[];

  //this.test=[{id:3}];



loading:any;

testCount :any;



 
panelOpenState = false;
closeResult: string;
editForm: FormGroup;
addForm: FormGroup;
title: string;
receive_address:any;
receive_coin:any;
 
total_transaction:any;

testCount1 :any;
total_deposit:any;
current_membership:any;
user_data;
current_plan;

balancehistory;



  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal) { }

  ngOnInit() {

  this.loading=true;
this.testCount=1;



     this.jobService.transactions_deposits()
      .subscribe( data => {
      
        this.transactions = data ;
    this.dataSource = data;
 
this.columnsToDisplay = ['id', 'type','amount','balance','coin',  'status', 'updated_at'  ];
expandedElement: Transaction;  
 

this.loading=false;

       
      });
  }
  
  
  
  
  
 onSubmit1() {
    this.jobService.receive_payment(this.addForm.value)
      .subscribe( data => {
      this._snackBar.open("Receive Payment successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
    
     // alert("Receive Payment successfully");
 this.receive_address=data.result.address; 
 this.receive_coin=data.result.coin;
      });
  }
  
  
  open2(content1) {


  this.addForm = this.formBuilder.group({
      id: [],
      coin: ['', Validators.required] 
       
    
    });

    this.modalService.open(content1, 
	{ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

 

}
