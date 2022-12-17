import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-engineer-job-work-list',
  templateUrl: './engineer-job-work-list.component.html',
  styleUrls: ['./engineer-job-work-list.component.css']
})
export class EngineerJobWorkListComponent implements OnInit {
  engineer_jobs;
  engineer_id;
  constructor(private activatedRoute: ActivatedRoute,
  private router: Router,
    private _snackBar: MatSnackBar, private jobService: JobService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.engineer_id = this.activatedRoute.snapshot.params.engineer_id;
    //et t = window.localStorage.getItem("engineer_id");



    this.jobService.engineer_job_list(+this.engineer_id)
      .subscribe(data => {
        console.log(data);
        this.engineer_jobs = data;
      });
  }

}
