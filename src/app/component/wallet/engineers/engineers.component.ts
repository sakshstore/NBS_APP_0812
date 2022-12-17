import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

import { JobService } from '../../job.service';
 import { User } from 'src/app/models/user.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

/**
 * @title Bottom Sheet Overview
 */



@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.css']
})


export class EngineersComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(Engineers);
  }
}

@Component({
  selector: 'engineer',
  templateUrl: 'engineer.html',
 
})

export class Engineers implements OnInit {

addForm: FormGroup;
constructor(private _bottomSheetRef: MatBottomSheetRef<Engineers>,private formBuilder: FormBuilder,private router: Router, private jobService: JobService,private _snackBar: MatSnackBar,private modalService: NgbModal) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {

  }
submit(){
}
  
}
