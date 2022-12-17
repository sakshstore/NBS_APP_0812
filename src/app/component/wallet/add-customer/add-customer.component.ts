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
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addForm: FormGroup;
  mobile; redirect: any;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private jobService: JobService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar, private modalService: NgbModal) { }


  ngOnInit(): void {

    this.redirect = this.activatedRoute.snapshot.params.redirect;



    const customer_mobile_number = localStorage.getItem('customer_mobile_number');



    this.addForm = this.formBuilder.group({
      id: [''],
      name: [''],


      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      alternative_mobile_number: ['', [Validators.minLength(10), Validators.maxLength(10)]],

      city: [''],
      pincode: [''],
      address: [''],


    });

  }

  onSubmit() {
    this.jobService.add_customer(this.addForm.value)
      .subscribe(
        data => {


          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

          if (!data['Error']) {
            this.mobile = this.addForm.value.mobile_number;


            if (this.redirect == "add-job-work") {
              this.router.navigate(['job_work/add', 2, this.mobile]);
            }
            else {
              this.router.navigate(['search-customer/' + this.mobile]);

            }

          }

        },
        error => {
          alert(error);
        });

  }


}
