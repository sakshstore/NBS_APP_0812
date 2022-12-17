import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-customer-login-history',
  templateUrl: './customer-login-history.component.html',
  styleUrls: ['./customer-login-history.component.css']
})
export class CustomerLoginHistoryComponent implements OnInit {
constructor(private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }
login_history;

  ngOnInit(): void {
  	this.jobService.customer_login_history()
      .subscribe(
        data => {
          console.log("data",data);
          this.login_history = data;
        });

  }

}
