import { Component, OnInit } from '@angular/core';
 import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';





import { JobService } from '../../../job.service';
 import { User } from 'src/app/models/user.model';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  panelOpenState = false;
  id:any;
users:User[];
upcoming:User[];
past:User[];
name:any;
profile1:any;
profile2:any;
profile3:any;
profile4:any;
profile5:any;
status:any;
rate:any;
amount:any;
start_time:any;
client_name:any;
end_time:any;
customer_name:any;
customer_id:any;
booking_id:any;
totalcustomerbooking:any;
totalguardbooking:any;
totalcancelbooking:any;
guardtotalbookingamount:any;

customertotalbookingamount:any;
  constructor(private router: Router, private jobService: JobService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params.id;
  this.jobService.guardtotalbooking(+this.id)
      .subscribe( data => {
       console.log("guardtotalbooking",data);
       this.totalguardbooking=data;
  });
       let cid1=window.localStorage.getItem("client_id");
this.jobService.customertotalbooking(+cid1)
      .subscribe( data => {
      console.log("customertotalbooking",data);
      this.totalcustomerbooking=data;
  });
let cid2=window.localStorage.getItem("client_id");
this.jobService.totalcancelbooking(+cid2)
      .subscribe( data => {
      console.log("totalcancelbooking",data);
      this.totalcancelbooking=data;
  });

    this.id = this.activatedRoute.snapshot.params.id;
  this.jobService.guardtotalbookingamount(+this.id)
      .subscribe( data => {
       console.log("guardtotalbookingamount",data,this.id);
       this.guardtotalbookingamount=data;
  });
       let cid3=window.localStorage.getItem("client_id");
this.jobService.customertotalbookingamount(+cid3)
      .subscribe( data => {
      console.log("customertotalbookingamount",data);
      this.customertotalbookingamount=data;
  });
  

let t=window.localStorage.getItem("booking_id");
this.booking_id=t;
this.jobService.booking_details(+t)
      .subscribe( data => {
       this.name=data['name'];
       this.rate=data['rate'];
       this.amount=data['amount'];
       this.start_time=data['start_time'];
       this.client_name=data['client_name'];
       this.end_time=data['end_time'];
       this.status=data['status'];
            console.log(data); 
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

let cid=window.localStorage.getItem("client_id");
this.customer_id=cid;
this.jobService.kyc_user_details(+cid)
      .subscribe( data => {
       this.users = data;
       this.customer_name=data['first_name'];
      
            console.log(data); 
    });

  }
}
