
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
  selector: 'app-estimate-report',
  templateUrl: './estimate-report.component.html',
  styleUrls: ['./estimate-report.component.css']
})


export class EstimateReportComponent implements OnInit {

  estimate_report: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }


  ngOnInit(): void {

    this.jobService.estimate_report()
      .subscribe(data => {
        console.log(data);
        this.estimate_report = data;

      });
  }

  sendto(id: any) {
    window.localStorage.removeItem("service_id");
    window.localStorage.setItem("service_id", id);
    this.router.navigate(['ticket-message-details', id]);
  }

}
