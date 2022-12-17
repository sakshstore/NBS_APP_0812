import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import { JobService } from '../../job.service';
 import { User } from 'src/app/models/user.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})

export class AdminProfileComponent implements OnInit {


  users: User[];
  editForm: FormGroup;
  closeResult: string;

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar,private modalService: NgbModal) { }

  ngOnInit() {


    this.editForm = this.formBuilder.group({
      id: [''],                             
      first_name: [''],
       last_name: [''],
         mobile: [''], 
          email: [''],
         country: [''],
         address1: [''],
         address2: [''],
         state: [''],
       
        district:[''],
        house_no:[''],
        street:[''],
        apartment_number:[''],
        zip_code:[''],
       
       city:[''],
       
        
       dob:[''],
       gender:[''],
        
    
       
        
        
       profile_pic:[''] 
    });

    this.jobService.getuserById()
      .subscribe( data => {
        this.editForm.setValue(data);
     

      });

       
  }

onSubmit() {
    this.jobService.updateProfile(this.editForm.value)
      .pipe(first())
       .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
          
          
            //this.router.navigate(['job/center-list']);
          }else {
       
            this._snackBar.open("Update Profile Successfully", "Close", {
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


}
