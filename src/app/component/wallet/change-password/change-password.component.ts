import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { JobService } from '../../job.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private jobService: JobService) { }


  addForm: FormGroup;
ngOnInit() {
  this.addForm = this.formBuilder.group({
      id: [],
      current_password: ['', Validators.required], 
       new_password: ['', Validators.required],
        confirm_password: ['', Validators.required]
        
     
     
    });

  }

  onSubmit() {
    this.jobService.changepassword(this.addForm.value)
      .subscribe( data => {
      });
  }
}
