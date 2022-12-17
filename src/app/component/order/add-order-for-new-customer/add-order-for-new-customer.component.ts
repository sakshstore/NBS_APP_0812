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
  selector: 'app-add-order-for-new-customer',
  templateUrl: './add-order-for-new-customer.component.html',
  styleUrls: ['./add-order-for-new-customer.component.css']
})
export class AddOrderForNewCustomerComponent implements OnInit {

  
  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }

  problem_details;
  customer_mobile_number;
  city;
  pincode;name;
  address;  mobile_number;
  alternative_mobile_number;
  machine_title;
  title;    model:any ;
  brand:any ;
description:any;
cover:any;
sell_price:any;
product_name:any;
payment_method:any;
category_list:any
subcategory_list:any;
brand_list:any;
  customer_alternative_mobile_number:any;

  show: boolean = false;
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;

  addForm: FormGroup;

files: File[] = [];
  users: User[];
  msg:any;

  ngOnInit(): void {
    this.step1 = true;
 this.jobService.category_list()
      .subscribe(
        data => {
          console.log("data",data);
          this.category_list = data['data'];
        });
      
  
 
   this.jobService.subcategory_list()
      .subscribe(
        data => {
          console.log("data",data);
          this.subcategory_list = data['data'];
        });
        this.jobService.brand_list()
      .subscribe(
        data => {
          console.log("data",data);
          this.brand_list = data['data'];
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
      amount:[''],
      payment_method:[''],

       sub_cate_id:[''],
           
      original_price: [''],
      discount: [''],
      wholesale_price: [''],
      wholesale_min_quantity:[''],
      descriptions:[''],
      cate_id:[''],
      brand_id:[''],
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
onsendfile(file:any,type1:any) {

   this.addForm.controls['cover'].setValue(file);

  }
  
  onRemove(event) {
  
 // alert("183");
  
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}


onSelect(event,type1) {
  console.log(event,type1);
  //alert(type1);

  this.files.push(...event.addedFiles);
  
  
  this.readFile(this.files[0]).then(fileContents => {
    // Put this string in a request body to upload it to an API.
    console.log(fileContents);
  
  this.onsendfile(fileContents,type1);
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

    this.jobService.new_customer_for_order(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

          this.router.navigate(['order/order-details',data['order_id'] ]);
         

        },
        error => {
          alert(error);
        });


  }

 

}
