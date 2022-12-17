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
  selector: 'app-search-customer-for-complain',
  templateUrl: './search-customer-for-complain.component.html',
  styleUrls: ['./search-customer-for-complain.component.css']
})
export class SearchCustomerForComplainComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }

  problem_details;
  customer_mobile_number;
  city;
  pincode;
  address;
  machine_title;
  title;


  show: boolean = false;
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;
  machinesteps: boolean = false;
  count;
  panelOpenState = false;
  addForm: FormGroup;
  searchForm: FormGroup;
  jobsearchForm: FormGroup;
  customer_details: any;
  machine_list;
  address_list;
  addresssteps;

  machine;
  servicelist;
  estimate_list;
  notes_list;
  message_list;

  job_work_list;
  files: File[] = [];
  users: User[];
  msg: any;

  ngOnInit(): void {



    this.show = false;


    this.step1 = true;

    this.searchForm = this.formBuilder.group({
      customer_mobile_number: [''],
    });

    this.jobsearchForm = this.formBuilder.group({
      job_work_id: [''],
    });



    this.addForm = this.formBuilder.group({
      id: [''],

      customer_id: [''],
      machine_id: [''],
      address_id: [''],
      customer_name: [''],
      customer_mobile_number: [''],
      machine_title: [''],
      brand: [''],
      year_of_purchase: [''],
      model: [''],

      machine_image: [''],
      name: [''],
      mobile_number: [''],

      city: [''],
      pincode: [''],
      address: [''],
      title: [''],
      problem_details: [''],
      image: [''],
      amount: ['']


    });

  }

  add_customer() {
    this.router.navigate(['add-job-work-for-new-customer']);
  }
  add_address() {
    this.addresssteps = true;
  }
  add_machine() {
    this.machinesteps = true;
  }

  onSubmit1() {
    this.step1 = false;
    this.step2 = true;

  }

  onmachineSubmit2(machine) {

    this.addForm.controls['machine_id'].setValue(machine.id);
    this.addForm.controls['machine_title'].setValue(machine.title);
    this.addForm.controls['brand'].setValue(machine.brand);
    this.addForm.controls['year_of_purchase'].setValue(machine.year_of_purchase);
    this.addForm.controls['model'].setValue(machine.model);
    this.addForm.controls['machine_image'].setValue(machine.machine_image);


    this.onSubmit2();
  }

  onmachineSubmit3(address) {
    this.addForm.controls['address_id'].setValue(address.id);
    this.addForm.controls['name'].setValue(address.name);
    this.addForm.controls['city'].setValue(address.city);
    this.addForm.controls['pincode'].setValue(address.pincode);
    this.addForm.controls['mobile_number'].setValue(address.mobile_number);
    this.addForm.controls['address'].setValue(address.address);
    this.onSubmit3();
  }

  onSubmit2() {


    this.step1 = false;
    this.step2 = false;
    this.step3 = true;
    this.step4 = false;
    this.step5 = false;



  }


  onSubmit3() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;

    this.step4 = true;

    this.step5 = false;


  }



  onSubmit4() {
    this.step1 = false;
    this.step2 = false;
    this.step3 = false;
    this.step4 = false;
    this.step5 = true;


    this.problem_details = this.addForm.value.problem_details;
    this.customer_mobile_number = this.addForm.value.customer_mobile_number;
    this.city = this.addForm.value.city;
    this.pincode = this.addForm.value.pincode;
    this.address = this.addForm.value.address;
    this.machine_title = this.addForm.value.machine_title;
    this.title = this.addForm.value.title;




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

  search() {

    this.jobService.seacrh_customer(this.searchForm.value)
      .subscribe(
        data => {
          console.log(data);
          if (!data.Error) {


            this._snackBar.open(data['message'], "Close", {
              duration: 2000,

              verticalPosition: 'top',
              horizontalPosition: 'center'
            });



            this.router.navigate(['search-customer', data['customer']['mobile_number']]);



            /*
            this.show = true;





            this.addForm.controls['customer_id'].setValue(data['customer']['customer_id']);



            this.addForm.controls['customer_name'].setValue(data['customer']['name']);
            this.addForm.controls['customer_mobile_number'].setValue(data['customer']['mobile_number']);


            this.machine_list = data['machine_list'];
            this.address_list = data['address_list'];

            this.notes_list = data['notes_list'];

            this.customer_details = data['customer'];

            this.estimate_list= data['estimate_list'];

            this.job_work_list= data['job_work_list'];

*/


          }

          else {





            this._snackBar.open(data['message'], "Close", {
              duration: 2000,

              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }


          let customer_mobile_number = this.searchForm.value.customer_mobile_number;

        
          window.localStorage.removeItem("customer_mobile_number");
          window.localStorage.setItem("customer_mobile_number", customer_mobile_number);


        },
        error => {
          alert(error);
        });



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

    this.jobService.customer_for_complain(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.router.navigate(['ticket-message-details', data['job_work_id']]);

        },
        error => {
          alert(error);
        });


  }

}
