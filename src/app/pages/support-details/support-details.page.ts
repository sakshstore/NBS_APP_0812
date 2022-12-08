import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-support-details',
  templateUrl: './support-details.page.html',
  styleUrls: ['./support-details.page.scss'],
})
export class SupportDetailsPage implements OnInit {

job_work_details;
title;
problem_details;
address_details;
mobile_number;
city;
pincode;address;
machine_details;
brand;
year_of_purchase;
model;
id;
	machine_title;
  constructor(private router: Router,private authService: AuthenticationService) { }

  ngOnInit() {
  	 let t =   window.localStorage.getItem("job_work_id");
  	 this.id = t;
this.authService.job_work_details(+t)
      .subscribe( data => {
      
      console.log("data",data);
      this.job_work_details = data;
      this.title = data['title'];
      this.problem_details = data['problem_details'];
      

       });


       let t1 = window.localStorage.getItem("address_id");
       this.authService.address_details(+t1)
      .subscribe( data => {
      
      console.log("data",data);
      this.address_details = data;
      this.mobile_number = data['mobile_number'];
      this.city = data['city'];
       this.pincode = data['pincode'];
      this.address = data['address'];
      

       });

       let t2 = window.localStorage.getItem("machine_id");
       this.authService.machine_details(+t2)
      .subscribe( data => {
      
      console.log("data",data);
      this.machine_details = data;
      this.machine_title = data['title'];
      this.brand = data['brand'];
       this.year_of_purchase = data['year_of_purchase'];
      this.model = data['model'];
      

       });
  }

   select(){
           
  	  this.router.navigateByUrl('/tabs/tab2');
  }

}
