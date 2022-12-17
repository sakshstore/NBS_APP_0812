import { Component, OnInit } from '@angular/core';

 import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';


import { JobService } from '../../job.service';
 import { User } from 'src/app/models/user.model';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
id:any;
users:User[];
  transaction:User[];
upcoming:User[];
past:User[];
name:any;
profile1:any;
profile2:any;
profile3:any;
profile4:any;
profile5:any;
totalguardbooking:any;
guardtotalbookingamount:any;

panelOpenState = false;
  constructor(private router: Router, private jobService: JobService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.id = this.activatedRoute.snapshot.params.id;
  this.jobService.guardtotalbooking(+this.id)
      .subscribe( data => {
       console.log("guardtotalbooking",data);
       this.totalguardbooking=data;
  });

   this.id = this.activatedRoute.snapshot.params.id;
  this.jobService.guardtotalbookingamount(+this.id)
      .subscribe( data => {
       console.log("guardtotalbookingamount",data,this.id);
       this.guardtotalbookingamount=data;
  });
            this.id = this.activatedRoute.snapshot.params.id;
             this.jobService.upcoming_booking_list_byid(+this.id)
      .subscribe( data => {
       this.upcoming = data;
       console.log(data);
        });

          this.jobService.past_booking_list_byid(+this.id)
      .subscribe( data => {
       this.past = data;
       console.log(data);
        });

        this.jobService.transactionbyid(+this.id)
      .subscribe( data => {
       this.transaction = data;
       console.log(data);
        });
             this.jobService.kyc_user_details(+this.id)
      .subscribe( data => {
       this.users = data;
       this.name=data['first_name'];
       this.profile1=data['profile1'];
       this.profile2=data['profile2'];
       this.profile3=data['profile3'];
       this.profile4=data['profile4'];
       this.profile5=data['profile5'];
            console.log(data); 
    });


  }

}
