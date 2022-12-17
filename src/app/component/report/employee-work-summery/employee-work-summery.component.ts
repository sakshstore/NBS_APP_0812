
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee-work-summery',
  templateUrl: './employee-work-summery.component.html',
  styleUrls: ['./employee-work-summery.component.css']
})
export class EmployeeWorkSummeryComponent implements OnInit {

  searchForm: FormGroup;
  job_work_report: any; engineers_list: any;
  show: boolean = false;


  hide: boolean = false;

  date; query: any; engineer_id: any;
  jobsearchForm: FormGroup;

  employee_work_weeks:any;
  employee_work_report: any;

  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.employee_work_summery();
  }






  employee_work_summery() {
    this.jobService.employee_work_summery()
      .subscribe(
        data => {

          this.employee_work_report = data['data'];
          this.employee_work_weeks = data['weeks'];
        });

  }



}
