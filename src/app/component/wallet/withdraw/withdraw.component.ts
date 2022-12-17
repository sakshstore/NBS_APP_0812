import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { Transaction } from 'src/app/models/transaction.model';

import {animate, state, style, transition, trigger} from '@angular/animations';


import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css'],
   animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WithdrawComponent implements OnInit {

dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

transactions: Transaction[];
 closeResult: string;


  editForm: FormGroup;
   addForm: FormGroup;

  //this.test=[{id:3}];



loading:any;

testCount :any;


  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal,private _snackBar: MatSnackBar) { }

  ngOnInit() {

   this.loading=true;
this.testCount=1;



     this.jobService.transactions_widthdraws()
      .subscribe( data => {
      
        this.transactions = data ;
    this.dataSource = data;

 
 


this.columnsToDisplay = ['id', 'type','amount','balance','coin',  'status', 'updated_at'  ];
expandedElement: Transaction;  
 

this.loading=false;

       
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


    this.jobService.send_payment(this.addForm.value)
      .subscribe( data => {
alert("Send Payment successfully");
       this._snackBar.open("Send Payment successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  
      });
  }


 onSubmit() {

    this.jobService.send_payment(this.addForm.value)
      .subscribe( data => {
alert("Send Payment successfully");
       this._snackBar.open("Send Payment successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  
      });
  }


}
