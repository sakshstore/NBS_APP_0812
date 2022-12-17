import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { Transaction } from 'src/app/models/transaction.model';

import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TransactionComponent implements OnInit {
 dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

transactions : Transaction[];


loading:any;

testCount :any;

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService) { }

  ngOnInit() {
  this.loading=true;
this.testCount=1;



     this.jobService.alltransaction()
      .subscribe( data => {
      
        this.transactions = data ;
    this.dataSource = data;

this.columnsToDisplay = ['id', 'type','amount','balance','coin',  'status', 'updated_at'  ];
expandedElement: Transaction;  
 

this.loading=false;

       
      });
  }

  




}
