import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
  import { ActivatedRoute, Params, ParamMap } from '@angular/router';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

type;
 constructor(private router: Router,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

this.type = this.activatedRoute.snapshot.params.type;
console.log(this.type)
  	this.router.navigate(['user/list-user',this.type]);
  }

}
