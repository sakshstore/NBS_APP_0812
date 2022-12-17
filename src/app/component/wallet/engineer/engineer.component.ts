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
  selector: 'app-engineer',
  templateUrl: './engineer.component.html',
  styleUrls: ['./engineer.component.css']
})
export class EngineerComponent implements OnInit {
  addForm: FormGroup;
  engineers_list;
  closeResult: string;
  editForm: FormGroup;
  files: File[] = [];
  users: User[];
  msg: any;
  dataform;
  constructor(private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getengineer_list();

    this.addForm = this.formBuilder.group({
      id: [''],
      engineer_name: [''],
      engineer_mobile_number: [''],

      engineer_image: [''],



    });
  }


  onsendfile(file: any, type1: any) {

    this.addForm.controls['engineer_image'].setValue(file);
  }

  onRemove(event) {

    // alert("183");

    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  onSelect(event, type1) {
    console.log(event, type1);
    //alert(type1);

    this.files.push(...event.addedFiles);


    this.readFile(this.files[0]).then(fileContents => {
      // Put this string in a request body to upload it to an API.
      console.log(fileContents);

      this.onsendfile(fileContents, type1);
    });

  }



  onFilesAdded(event) {
    //  alert("189");

    console.log(event);
    this.files.push(...event.addedFiles);

    this.readFile(this.files[0]).then(fileContents => {
      // Put this string in a request body to upload it to an API.
      console.log(fileContents);
    });
  }

  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        return resolve((e.target as FileReader).result);
      };

      reader.onerror = e => {
        console.error("FileReader failed on file ${file.name}.");
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }

      reader.readAsDataURL(file);
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

    this.jobService.delete_engineer(+id)
      .subscribe(data => {
        console.log(data);

        this._snackBar.open(data['message'], "Close", {
          duration: 2000,

          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      });


    this.getengineer_list();
  }

  job_list(id) {

    window.localStorage.removeItem("engineer_id");
    window.localStorage.setItem("engineer_id", id);

    this.router.navigate(['engineer-job-work-list', id]);

  }

  add(content) {


    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.addForm = this.formBuilder.group({
      id: [''],
      engineer_name: [''],
      engineer_mobile_number: [''],

      engineer_image: [''],



    });
  }

  edit(content1, id) {


    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],


      image: [''],
      mobile_number: [''],
      created_id: [''],
      status: [''],
      created_at: ['']
    });

    this.jobService.edit_engineer_details(+id)
      .subscribe(data => {
        this.dataform = data;
        this.editForm.setValue(data);
        this.dataform = data;
        console.log("data", data);
        console.log("image", this.editForm.value.image);
        // alert(this.editForm.value.image);

      });

  }

  getengineer_list() {
    this.jobService.engineer_list()
      .subscribe(
        data => {
          console.log(data);
          this.engineers_list = data;
        });

  }

  updatesubmit() {

    this.jobService.update_engineer(this.editForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        });
    this.getengineer_list();
    this.modalService.dismissAll(this);
  }


  submit() {
    this.jobService.add_engineer(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        });

    this.getengineer_list();
    this.modalService.dismissAll(this);
  }


  sendto(id: any) {




    this.router.navigate(['report/job-work/engineer/', id]);
  }

}
