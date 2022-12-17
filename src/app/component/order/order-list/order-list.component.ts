import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Input  } from '@angular/core'; 



import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

 

import { Order } from 'src/app/order.model';
 


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  
})
export class OrderListComponent implements OnInit {

 

  
@Input( ) order_detail :Order   ;


 
  constructor(private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
   
    
  } 

}
