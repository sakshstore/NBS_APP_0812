

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
  selector: 'app-in-deposit-report',
  templateUrl: './in-deposit-report.component.html',
  styleUrls: ['./in-deposit-report.component.css']
})


export class InDepositReportComponent implements OnInit {

  in_deposit_report: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }


  ngOnInit(): void {

    this.jobService.in_deposit_report()
      .subscribe(data => {
        console.log(data);
        this.in_deposit_report = data;

      });
  }

  sendto(id: any) {
    window.localStorage.removeItem("service_id");
    window.localStorage.setItem("service_id", id);
    this.router.navigate(['ticket-message-details', id]);
  }

}
