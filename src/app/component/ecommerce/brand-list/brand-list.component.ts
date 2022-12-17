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
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  brand_list;
  closeResult: string;
  editForm: FormGroup;
  addForm: FormGroup;

  files: File[] = [];
  users: User[];
  msg: any;
  currentcoverFile;
  constructor(private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getbrand_list();

    this.addForm = this.formBuilder.group({
      id: [''],
      name: [''],
      cover: [''],
    });
  }


  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getFiles(value, type) {
    // alert(type1);
    if (type == 'brand_image') {
      this.addForm.controls['cover'].setValue(value);
    }
    if (type == 'update_brand_image') {
      this.editForm.controls['cover'].setValue(value);
    }
  }
  delete(id) {

    this.jobService.delete_brand(+id)
      .subscribe(data => {
        console.log(data);

        this._snackBar.open(data['message'], "Close", {
          duration: 2000,

          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      });


    this.getbrand_list();
  }

  // job_list(id) {

  //   window.localStorage.removeItem("engineer_id");
  //   window.localStorage.setItem("engineer_id", id);

  //   this.router.navigate(['engineer-job-work-list',id]);

  // }

  add(content) {


    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.addForm = this.formBuilder.group({
      id: [''],
      name: [''],
      cover: [''],




    });
  }

  edit(content1, id) {


    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {


      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],
      cover: [''],
      extra_field: [''],
      status: ['']
    });

    this.jobService.edit_brand_details(+id)
      .subscribe(data => {
        this.editForm.setValue(data['data']);


      });

  }

  getbrand_list() {
    this.jobService.brand_list()
      .subscribe(
        data => {
          console.log("data", data);
          this.brand_list = data['data'];
        });

  }

  updatesubmit() {

    this.jobService.update_brand(this.editForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        });
    this.getbrand_list();
    this.modalService.dismissAll(this);
  }


  submit() {
    this.jobService.add_brand(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        });

    this.getbrand_list();
    this.modalService.dismissAll(this);
  }

}
