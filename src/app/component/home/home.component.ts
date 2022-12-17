import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
 
import {animate, state, style, transition, trigger} from '@angular/animations';
import { JobService } from 'src/app/component/job.service';
 import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
   animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class HomeComponent implements OnInit {
 
  

  constructor(private router: Router,private jobService: JobService) {  }

  ngOnInit() { 
  }

}


