import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JobService } from '../../job.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Transaction } from 'src/app/models/transaction.model';


@Component({
  selector: 'app-user-deposit',
  templateUrl: './user-deposit.component.html',
  styleUrls: ['./user-deposit.component.css']
})
export class UserDepositComponent implements OnInit {
currency : Transaction[];
msg:any;
addForm:FormGroup;
receive_address:any;
receive_coin:any;

  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.jobService.currencylist()
      .subscribe( data => {
      
        this.currency = data ;
        console.log(data);

        });

  }

  generate_address(coin){
  this.addForm = this.formBuilder.group({
      id: [],
      coin: [coin]  

    });
    this.onSubmit()
}

onSubmit() {
    this.jobService.receive_payment(this.addForm.value)
      .subscribe( data => {
 this.receive_address=data.result.address; 
 this.receive_coin=data.result.coin;

  window.localStorage.removeItem("receive_address");
 window.localStorage.setItem("receive_address", this.receive_address   );

 window.localStorage.removeItem("receive_coin");
 window.localStorage.setItem("receive_coin", this.receive_coin   );
 this.router.navigate(['user-deposit-address']);
      });
  }
}
