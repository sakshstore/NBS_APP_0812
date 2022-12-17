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
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {


  constructor(private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }
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
  ordersearchForm: FormGroup;
  customer_details: any;
  machine_list;
  address_list;
  addresssteps;
  order_id;
  machine;
  servicelist;
  estimate_list;
  notes_list;
  message_list;
  product_list;
  job_work_list;
  files: File[] = [];
  users: User[];
  msg: any;
  product_name;
  sell_price;
  description;
  cover;
  category_list;
  payment_method;
  subcategory_list;
  brand_list;
  ngOnInit(): void {



    this.show = false;


    this.step1 = true;

    this.searchForm = this.formBuilder.group({
      customer_mobile_number: [''],
    });

    this.ordersearchForm = this.formBuilder.group({
      order_id: [''],
    });



    this.addForm = this.formBuilder.group({
      id: [''],

      customer_id: [''],
      product_id: [''],
      address_id: [''],
      customer_name: [''],
      customer_mobile_number: [''],
      product_name: [''],
      sell_price: [''],
      description: [''],

      cover: [''],
      name: [''],
      mobile_number: [''],

      city: [''],
      pincode: [''],
      address: [''],
      title: [''],
      problem_details: [''],
      image: [''],
      amount: [''],
      payment_method: [''],

      sub_cate_id: [''],

      original_price: [''],
      discount: [''],
      wholesale_price: [''],
      wholesale_min_quantity: [''],
      descriptions: [''],
      cate_id: [''],
      brand_id: [''],



    });

    this.jobService.category_list()
      .subscribe(
        data => {
          console.log("data", data);
          this.category_list = data['data'];
        });



    this.jobService.subcategory_list()
      .subscribe(
        data => {
          console.log("data", data);
          this.subcategory_list = data['data'];
        });
    this.jobService.brand_list()
      .subscribe(
        data => {
          console.log("data", data);
          this.brand_list = data['data'];
        });

  }

  add_customer() {
    this.router.navigate(['order/add-order-for-new-customer']);
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

  onproductSubmit2(product) {

    this.addForm.controls['product_id'].setValue(product.id);
    this.addForm.controls['product_name'].setValue(product.name);
    this.addForm.controls['sell_price'].setValue(product.sell_price);
    this.addForm.controls['description'].setValue(product.description);
    // this.addForm.controls['model'].setValue(machine.model);
    this.addForm.controls['cover'].setValue(product.cover);


    this.onSubmit2();
  }

  onmachineSubmit3(address) {
    this.addForm.controls['address_id'].setValue(address.address_id);
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


    this.description = this.addForm.value.description;
    this.cover = this.addForm.value.cover;
    this.customer_mobile_number = this.addForm.value.customer_mobile_number;
    this.city = this.addForm.value.city;
    this.pincode = this.addForm.value.pincode;
    this.address = this.addForm.value.address;
    this.sell_price = this.addForm.value.sell_price;
    this.product_name = this.addForm.value.product_name;
    this.payment_method = this.addForm.value.payment_method;



  }

  ordersearch() {

    this.order_id = this.ordersearchForm.value.order_id;
    this.router.navigate(['order/order-details', this.order_id]);


  }

  search() {

    this.jobService.order_seacrh_customer(this.searchForm.value)
      .subscribe(
        data => {
          console.log(data);
          if (!data.Error) {


            this._snackBar.open(data['message'], "Close", {
              duration: 2000,

              verticalPosition: 'top',
              horizontalPosition: 'center'
            });


            this.show = true;





            this.addForm.controls['customer_id'].setValue(data['customer']['customer_id']);



            this.addForm.controls['customer_name'].setValue(data['customer']['name']);
            this.addForm.controls['customer_mobile_number'].setValue(data['customer']['mobile_number']);


            this.product_list = data['product_list'];
            this.address_list = data['address_list'];

            // this.notes_list = data['notes_list'];

            this.customer_details = data['customer'];

            // this.estimate_list= data['estimate_list'];

            // this.job_work_list= data['job_work_list'];




          }

          else {





            this._snackBar.open(data['message'], "Close", {
              duration: 2000,

              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }

        },
        error => {
          alert(error);
        });



  }

  onsendfile(file: any, type1: any) {

    this.addForm.controls['cover'].setValue(file);

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

    this.jobService.customer_for_order(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

          this.router.navigate(['order/order-details', data['order_id']]);


        },
        error => {
          alert(error);
        });


  }

}
