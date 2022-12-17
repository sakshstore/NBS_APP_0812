import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import { JobService } from '../../../job.service';
 import { User } from 'src/app/models/user.model';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-past-booking',
  templateUrl: './past-booking.component.html',
  styleUrls: ['./past-booking.component.css'],
   animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PastBookingComponent implements OnInit {
dataSource;

  columnsToDisplay = [];
  expandedElement: null;  

  users: User[];
    page = 1;
  pageSize = 4;
collectionSize;
// users.length;

loading:any;

testCount :any;



  constructor(private router: Router, private jobService: JobService,private _snackBar: MatSnackBar) {
  
   }




  ngOnInit() {

 
this.loading=true;
this.testCount=1;

  this.users=[ {id:3}];

    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    let token = localStorage.getItem('token');
  

  
    this.jobService.past_booking_list()
      .subscribe( data => {
      
        this.users = data;
        console.log(this.users);
this.collectionSize=this.users.length;

  
   this.testCount= this.users.length;
   this.dataSource = data;

this.columnsToDisplay = ['booking_id','name','rate','amount','client_name','start_time','end_time'];
expandedElement: User; 
       console.log(this.testCount);
window.localStorage.removeItem("students");
    window.localStorage.setItem("students", this.testCount);

this.loading=false;
 
 
        
 

      });
  }

}
