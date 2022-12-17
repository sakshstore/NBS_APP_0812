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
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

service_list:any;
constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar,private modalService: NgbModal) { }


  ngOnInit(): void {
/*
     this.jobService.service_list()
      .subscribe( data => {
       console.log(data);
       this.service_list=data;

   });
  
  
  */
 
  }

  sendto(id:any){
  		window.localStorage.removeItem("service_id");
        window.localStorage.setItem("service_id",id );
 this.router.navigate(['ticket-message-details',id]);
  }

}
