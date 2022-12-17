import { Component, OnInit } from '@angular/core';



 
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";




@Component({
  selector: 'app-sendto',
  templateUrl: './sendto.component.html',
  styleUrls: ['./sendto.component.css']
})

export class SendtoComponent implements OnInit {

  url:any;parameter:any;
  constructor(private activatedRoute: ActivatedRoute,  private router: Router ) { }


  ngOnInit(): void {

    this.url = this.activatedRoute.snapshot.params.url;
    this.parameter = this.activatedRoute.snapshot.params.parameter;

    alert(this.url);

  }


 
}
