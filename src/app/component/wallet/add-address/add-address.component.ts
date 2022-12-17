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
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {



  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }
  addForm: FormGroup;
  ngOnInit(): void {

    let c1 = window.localStorage.getItem("customer_id");
    let m1 = window.localStorage.getItem("machine_id");

    this.addForm = this.formBuilder.group({
      id: [''],
      name: [''],
      mobile_number: [''],
      city: [''],
      pincode: [''],
      address: [''],
      customer_id: [c1,],
    });

  }

  onSubmit() {
    this.jobService.add_address(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);
          window.localStorage.removeItem("address_id");
          window.localStorage.setItem("address_id", data['address_id']);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          this.router.navigate(['add-service-problem']);
        },
        error => {
          alert(error);
        });

  }

}
