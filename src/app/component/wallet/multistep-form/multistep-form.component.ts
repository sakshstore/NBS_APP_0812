import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-multistep-form',
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.css']
})
export class MultistepFormComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }

  problem_details;
  customer_mobile_number;
  city;
  pincode; name;
  address; mobile_number;
  alternative_mobile_number;
  machine_title;
  title; model: any;
  brand: any;


  customer_alternative_mobile_number: any;

  show: boolean = false;
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;

  addForm: FormGroup;

  files: File[] = [];
  users: User[];
  msg: any;

  ngOnInit(): void {
    this.step1 = true;

    this.addForm = this.formBuilder.group({
      id: [''],
      name: [''],



      mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      alternative_mobile_number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],



      brand: [''],

      model: [''],
      customer_id: [''],
      machine_image: [''],




      city: [''],
      pincode: [''],
      address: [''],
      title: [''],
      problem_details: [''],
      image: [''],
      machine_title: [''],

    });

  }


  onSubmit1() {
    this.step1 = false;
    this.step2 = true;

  }

  onSubmit2() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
  }


  onSubmit3() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = true;
  }

  onSubmit4() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = true;


    this.name = this.addForm.value.name;

    this.problem_details = this.addForm.value.problem_details;
    this.mobile_number = this.addForm.value.mobile_number;
    this.alternative_mobile_number = this.addForm.value.alternative_mobile_number;



    this.city = this.addForm.value.city;
    this.pincode = this.addForm.value.pincode;
    this.address = this.addForm.value.address;


    this.model = this.addForm.value.model;
    this.brand = this.addForm.value.brand;



    this.title = this.addForm.value.title;




  }
  onsendfile(file: any, type1: any) {
    if (type1 == 'problem_image') {
      this.addForm.controls['image'].setValue(file);
    }
    if (type1 == 'machine_image') {
      this.addForm.controls['machine_image'].setValue(file);
    }
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
  submit() {

    this.jobService.add_machinestepform(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

          window.localStorage.removeItem("service_id");
          window.localStorage.setItem("service_id", data['job_work_id']);
          this.router.navigate(['ticket-message-details', data['job_work_id']]);
        },
        error => {
          alert(error);
        });


  }


}
