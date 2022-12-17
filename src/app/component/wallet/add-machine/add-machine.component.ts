import { Component, OnInit,Input } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import { JobService } from '../../job.service';
 import { User } from 'src/app/models/user.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {

  addForm: FormGroup;
  @Input() customer_id = '';
  files: File[] = [];
  users: User[];
  msg:any;
 constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar,private modalService: NgbModal) { }


  ngOnInit(): void {


     // let t1 = window.localStorage.getItem("customer_id");

alert(this.customer_id);
    this.addForm = this.formBuilder.group({
      id: [''],                             
      title: [''],
        brand: [''],
          year_of_purchase: [''],
        model: [''],
        customer_id: [this.customer_id],
        image: [''],


    });
          
  }

 onsendfile(file:any,type1:any) {

     this.addForm.controls['image'].setValue(file);
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
  onSubmit() {
    this.jobService.add_machine(this.addForm.value)
      .subscribe(
        data => {
        	console.log(data);
        	
		 this._snackBar.open(data['message'], "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
       this.modalService.dismissAll(this);
            //this.router.navigate(['add-address']);
        },
        error => {
          alert(error);
        });
           
           }

}