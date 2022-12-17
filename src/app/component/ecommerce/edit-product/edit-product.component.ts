import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

constructor(private activatedRoute: ActivatedRoute,private router: Router, private _snackBar: MatSnackBar, private modalService: NgbModal, private jobService: JobService, private formBuilder: FormBuilder) { }
category_list;
  editForm: FormGroup;
  subcategory_list;
brand_list;
	id;
  files: File[] = [];
  users: User[];
  msg:any;

  ngOnInit(): void {

  	 this.id = this.activatedRoute.snapshot.params.id;
  	    this.editForm = this.formBuilder.group({
       id: [''],

       sub_categories_name:[''],
       sub_categories_id:[''],
             name: [''],
             cate_name:[''],
      original_price: [''],
      sell_price: [''],
      discount: [''],
      wholesale_price: [''],
      wholesale_min_quantity:[''],
descriptions:[''],
      seoImage: [''],
      cate_id:[''],
      brand_id:[''],
      cover:[''],
      gallery:[''],
      brand_name:[''],

    });

  	     this.jobService.edit_product_details(+this.id)
      .subscribe(data => {
        this.editForm.setValue(data['data']);

// alert(this.editForm.value.cover);

      });


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
  }

    submit() {
    this.jobService.update_product(this.editForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
this.router.navigate(['ecommerce/product-list']);
        });

    // this.getproduct_list();
    // this.modalService.dismissAll(this);
  }


onsendfile(file:any,type1:any) {

// if(type1 == 'problem_image'){
   this.editForm.controls['cover'].setValue(file);
// }
// if(type1 == 'machine_image'){
//      this.addForm.controls['machine_image'].setValue(file);
//    }
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
  this.files.push(...event.addedFiles)
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

}
