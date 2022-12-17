import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { Transaction } from 'src/app/models/transaction.model';

 import { User } from 'src/app/models/user.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

transaction : Transaction[];
panelOpenState = false;
closeResult: string;
editForm: FormGroup;
addForm: FormGroup;
title: string;
receive_address:any;
receive_coin:any;
testCount :any;
total_transaction:any;

testCount1 :any;
total_deposit:any;
current_membership:any;
user_data;networkfee;
current_plan;
api_key;


currencies;;


  constructor(private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router, private jobService: JobService,
    private modalService: NgbModal) { }
 ngOnInit() {



             let current_plan= localStorage.getItem('plan');
this.current_plan=current_plan;


       let current_membership= localStorage.getItem('membership');
this.current_membership=current_membership;
 

     this.jobService.alltransaction()
      .subscribe( data => {
      this.transaction = data ;
         this.testCount= this.transaction.length;
       
      this.total_transaction=this.testCount;
      

  
      });


      //https://api.blockchain.info/mempool/fees

 this.jobService.getuserById()
      .subscribe( data => {
         console.log("data",data['BTC']);
        this.user_data = data.BTC ;

 this.api_key = data.api_key ;

      });

/*

      this.jobService.networkfee()
      .subscribe( data => {
      this.networkfee = data.result ; 

  
      });
*/
 this.jobService.currencylist()
      .subscribe( data => {
      
        this.currencies = data ;
        console.log(data);

        });


  }


  open(content) {
 //this._snackBar.open('Message archived',   'Undo', {  duration: 1000}    );
  this.addForm = this.formBuilder.group({
      id: [],
      coin: ['', Validators.required], 
      
      to: ['', Validators.required], 
      amount: ['', Validators.required], 
     
      amount_coin: [''],
      description: ['', Validators.required],
       network_fee: ['', Validators.required],   
    });


    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }




  open2(content1) {


  this.addForm = this.formBuilder.group({
      id: [],
      coin: ['', Validators.required] 
       
    
    });

    this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }



  openapikey(apikey) {

 

    this.modalService.open(apikey, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  
  
  private getDismissReason1(reason: any): string {

    
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 

 onSubmit() {

    this.jobService.send_payment(this.addForm.value)
      .subscribe( data => {
	this._snackBar.open("Send Payment successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
      //alert("Send Payment successfully");
      });
  }


newapikey(){
	
	  this.jobService.reset_api_key()
      .subscribe( data => {
      this._snackBar.open("Request send Successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
    
     
 this.api_key=data.api_key; 
 
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

 
    
 window.localStorage.removeItem("receive_address");
 window.localStorage.setItem("receive_address", this.receive_address   );


 
      });
  }



}

