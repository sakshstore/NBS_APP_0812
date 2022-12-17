import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import { JobService } from '../../job.service';

import { Transaction } from 'src/app/models/transaction.model';

 import { User } from 'src/app/models/user.model';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
  users: User[];
suspendedpartner :any;
deleteaccount :any;
total_deposit:any;
newregistered:any;
total_users:any;
active_users :any;
 msg:any;
 customerlist:any;
 suspendedcustomer:any;
 cancelledbooking:any;
Refund_booking:any;
pastbooking:any;
upcomingbooking:any;
booking:any;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private modalService: NgbModal) { }

  ngOnInit() {
// alert("sdf");
 
//      this.jobService.totallist()
//       .subscribe( data => {
//        console.log(data);
//        this.total_users=data['total_users'];
//     this.active_users=data['active_users'];
//     this.newregistered=data['newregistered'];
//     this.deleteaccount=data['deleteaccount'];
//     this.suspendedpartner=data['suspendedpartner'];
//      this.customerlist=data['customerlist'];
//      this.suspendedcustomer=data['suspendedcustomer'];

//      this.cancelledbooking=data['cancelledbooking'];
//      this.Refund_booking=data['Refund_booking'];
//      this.pastbooking=data['pastbooking'];
//      this.upcomingbooking=data['upcomingbooking'];
// this.booking=data['booking'];




//    });
 
}

}
