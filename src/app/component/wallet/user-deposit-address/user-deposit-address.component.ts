import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JobService } from '../../job.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-user-deposit-address',
  templateUrl: './user-deposit-address.component.html',
  styleUrls: ['./user-deposit-address.component.css']
})
export class UserDepositAddressComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar) { }


receive_address:any;
receive_coin:any;

  ngOnInit(): void {

  let address=window.localStorage.getItem("receive_address");
this.receive_address=address;
 let coin=window.localStorage.getItem("receive_coin");
this.receive_coin=coin;
  }

}
