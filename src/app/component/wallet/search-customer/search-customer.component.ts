import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { JobService } from './../../job.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


import { first } from "rxjs/operators";

import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {



  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService,
    private _snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private modalService: NgbModal) { }



  panelOpenState = false;
  mobile: any;
  mobile_number: any;
  name: any; add_job_work_form: any;
  customer_id: any;
  address; customer_type_data: any;
  machine; show_edit;
  servicelist; customer_type: any
  estimate_list;
  notes_list; alternative_mobile_number;
  message_list; addForm: FormGroup; addJobWorkForm: FormGroup;
  ngOnInit(): void {
    this.show_edit = false;
    this.add_job_work_form = false;


    this.customer_type_data = Array("customer", "wholeseler");


    this.addForm = this.formBuilder.group({
      id: [this.customer_id],
      name: [this.name, Validators.required],
      mobile_number: [this.mobile, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      alternative_mobile_number: [this.alternative_mobile_number, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      city: [''],
      pincode: [''],
      address: [''],
      address_id: [''],

      customer_type: ['', Validators.required],


    });

    this.addJobWorkForm = this.formBuilder.group({



      customer_id: [this.customer_id],


      title: [''],
      problem_details: [''],
      amount: [''],
      machine_id: [''],


    });




    this.mobile = this.activatedRoute.snapshot.params.mobile;


    this.customer_details(this.mobile);


  }


  customer_details(mobile: any) {
    this.jobService.customer_details(+this.mobile)
      .subscribe(data => {





        if (!data['Error']) {
          console.log("customer_details", data);
          this.name = data['customer']['name'];
          this.mobile_number = data['customer']['mobile_number'];
          this.customer_id = data['customer']['customer_id'];






          this.alternative_mobile_number = data['customer']['alternative_mobile_number'];



          this.addForm.controls['mobile_number'].setValue(this.mobile_number);
          this.addForm.controls['id'].setValue(data['customer']['customer_id']);
          this.addForm.controls['name'].setValue(this.name);




          this.addForm.controls['customer_type'].setValue(data['customer']['customer_type']);

          this.addForm.controls['alternative_mobile_number'].setValue(this.alternative_mobile_number);




          this.addJobWorkForm.controls['customer_id'].setValue(this.customer_id);

          this.addForm.controls['city'].setValue(data['address']['city']);
          this.addForm.controls['pincode'].setValue(data['address']['pincode']);
          this.addForm.controls['address'].setValue(data['address']['address']);
          this.addForm.controls['address_id'].setValue(data['address']['address_id']);

          this.show_machine(this.customer_id);

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


  onmachineSubmit2(machine_id) {
    alert(machine_id);
    this.addJobWorkForm.controls['machine_id'].setValue(machine_id);

  }

  sendto() {
    this.router.navigate(['ticket-message-details']);
  }

  /*
    add_job_work_for_this(mobile_number: any) {
      this.router.navigate(['job_work/add', 2, mobile_number]);
    }
    */

  show_address(customer_id) {
    this.jobService.address_bycustomer(+customer_id)
      .subscribe(data => {
        console.log(data);
        this.address = data;

      });

  }

  show_machine(customer_id) {

    this.jobService.machine_listby_customer(+customer_id)
      .subscribe(data => {
        console.log(data);
        this.machine = data;
        console.log(this.machine);
      });

  }

  show_job_list(customer_id) {

    /*
     this.jobService.servicelist_bycustomer(+customer_id)
       .subscribe(data => {
         console.log(data);
         this.servicelist = data;
 
       });
 
      */
  }

  show_estimate_list(customer_id) {
    this.jobService.estimate_listby_customer(+customer_id)
      .subscribe(data => {
        console.log(data);
        this.estimate_list = data;
      });

  }


  show_message_list(customer_id) {
    this.jobService.message_listby_customer(+customer_id)
      .subscribe(data => {
        console.log(data);
        this.message_list = data;
      });

  }


  show_notes_list(customer_id) {
    this.jobService.notes_listby_customer(+customer_id)
      .subscribe(data => {
        console.log(data);
        this.notes_list = data;
      });

  }
  open4(content) {

  }


  edit_customer() {
    this.show_edit = !this.show_edit;

  }


  add_job_work_for_this() {
    this.router.navigate(['add-job-work', this.mobile]);

  }

  EditCustomerSubmit() {
    this.jobService.update_customer(this.addForm.value)
      .subscribe(
        data => {


          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.mobile = data['customer']['mobile_number'];

          this.router.navigate(['search-customer/' + data['customer']['mobile_number']]);


          this.mobile = data['customer']['mobile_number'];


          this.customer_type = data['customer']['customer_type'];


          this.show_edit = false;


          this.customer_details(this.mobile);

        },
        error => {
          alert(error);
        });

  }




  submit() {

    this.jobService.add_job_work(this.addJobWorkForm.value)
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
