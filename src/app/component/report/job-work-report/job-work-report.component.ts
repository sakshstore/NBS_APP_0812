

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
  selector: 'app-job-work-report',
  templateUrl: './job-work-report.component.html',
  styleUrls: ['./job-work-report.component.css']
})


export class JobWorkReportComponent implements OnInit {
  searchForm: FormGroup;
  job_work_report: any; engineers_list: any;
  show: boolean = false;


  hide: boolean = false;

  date; query: any; engineer_id: any;
  jobsearchForm: FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }


  ngOnInit(): void {

    this.show = false;

    this.query = this.activatedRoute.snapshot.params.query;

    if (this.query != "engineer") {


      this.date = this.activatedRoute.snapshot.params.date;

      this.jobService.job_work_report(this.date)
        .subscribe(
          data => {

            this.show = true;
            this.job_work_report = data;
            console.log(data);
          });

    }
    else {
      this.engineer_id = this.activatedRoute.snapshot.params.engineer_id;


      this.jobService.engineer_job_list(+this.engineer_id)
        .subscribe(data => {
          console.log(data);
          this.show = true;
          this.job_work_report = data;
        });
    }


    // }


    // alert(this.date);
    this.searchForm = this.formBuilder.group({
      date_search: [''],
    });
    this.jobsearchForm = this.formBuilder.group({
      job_work_id: [''],
    });


    this.getengineer_list();

  }
  getengineer_list() {
    this.jobService.engineer_list()
      .subscribe(
        data => {
          console.log(data);
          this.engineers_list = data;
        });

  }

  search() {
    // alert(this.searchForm.value.date_search);
    this.jobService.job_work_report(this.searchForm.value.date_search)
      .subscribe(
        data => {

          this.job_work_report = data;
          console.log(data);
          // this.show=true;
          this.router.navigate(['report/job-work', this.searchForm.value.date_search]);





        });
  }
  jobsearch() {

    this.jobService.get_job_work(this.jobsearchForm.value.job_work_id)
      .subscribe(data => {
        console.log(data);

        if (!data['Error']) {
          this.router.navigate(['ticket-message-details', this.jobsearchForm.value.job_work_id]);



        }

        else {

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        }
      });


  }

  sendto(id: any) {

    this.router.navigate(['ticket-message-details', id]);
  }



  sendtoengineer(id: any) {

    this.engineer_id = id;
    this.jobService.engineer_job_list(+this.engineer_id)
      .subscribe(data => {
        console.log(data);
        this.job_work_report = data;
      });


    // this.show = false;
    this.router.navigate(['report/job-work/engineer/', id]);


    // this.ngOnInit();



  }


}
