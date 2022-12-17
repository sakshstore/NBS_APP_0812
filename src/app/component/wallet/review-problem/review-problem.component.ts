import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-problem',
  templateUrl: './review-problem.component.html',
  styleUrls: ['./review-problem.component.css']
})
export class ReviewProblemComponent implements OnInit {
show: boolean=false;
  constructor() { }

  ngOnInit(): void {

 let a1=window.localStorage.getItem("address_id");
let c1= window.localStorage.getItem("customer_id" );
let  m1 = window.localStorage.getItem("machine_id" );
 let s1=    window.localStorage.getItem("service_id");




  }

submit(){
	this.show=true;
}
}
