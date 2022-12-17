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
  selector: 'app-add-service-problem',
  templateUrl: './add-service-problem.component.html',
  styleUrls: ['./add-service-problem.component.css']
})
export class AddServiceProblemComponent implements OnInit {
  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }

  ngOnInit(): void {


    let a1 = window.localStorage.getItem("address_id");
    let c1 = window.localStorage.getItem("customer_id");
    let m1 = window.localStorage.getItem("machine_id");

    this.addForm = this.formBuilder.group({
      id: [''],
      title: [''],
      problem_details: [''],
      image: [''],
      customer_id: [c1],

    });




  }

  onSubmit() {

    /*
    this.jobService.add_service(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);
          window.localStorage.removeItem("service_id");
          window.localStorage.setItem("service_id", data['service_id']);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          this.router.navigate(['review-problem']);
        },
        error => {
          alert(error);
        });
*/
  }


}