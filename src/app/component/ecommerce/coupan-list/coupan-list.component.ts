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
  selector: 'app-coupan-list',
  templateUrl: './coupan-list.component.html',
  styleUrls: ['./coupan-list.component.css']
})
export class CoupanListComponent implements OnInit {

  addForm: FormGroup;
 coupan_list;
  closeResult: string;
  editForm: FormGroup;
  constructor(private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  	
    this.getcoupan_list();

    this.addForm = this.formBuilder.group({
      id: [''],
       coupan_code: [''],
discount:['']
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


  delete(id) {

    this.jobService.delete_coupan(+id)
      .subscribe(data => {
        console.log(data);

        this._snackBar.open(data['message'], "Close", {
          duration: 2000,

          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      });


    this.getcoupan_list();
  }


  add(content) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.addForm = this.formBuilder.group({
    id: [''],
      coupan_code: [''],
discount:['']
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
      coupan_code: [''],
discount:['']
    });
    this.jobService.edit_coupan_details(+id)
      .subscribe(data => {
        this.editForm.setValue(data);


      });

  }

  getcoupan_list() {
 
   this.jobService.coupan_list()
      .subscribe(
        data => {
          console.log("data",data);
          this.coupan_list = data;
        });

  }


  updatesubmit() {

    this.jobService.update_coupan(this.editForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        });
    this.getcoupan_list();
    this.modalService.dismissAll(this);
  }


  submit() {
    this.jobService.add_coupan(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        });

    this.getcoupan_list();
    this.modalService.dismissAll(this);
  }


}
