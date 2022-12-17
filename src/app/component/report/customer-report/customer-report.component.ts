import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef,GridApi, GridReadyEvent } from 'ag-grid-community';


@Component({
  selector: 'app-customer-report',
  templateUrl: './customer-report.component.html',
  styleUrls: ['./customer-report.component.css']
})

export class CustomerReportComponent implements OnInit {



  private gridApi!: GridApi;

  // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  { field: 'customer_id'},
  { field: 'name'},
  { field: 'mobile_number'},
  { field: 'alternative_mobile_number'},
  {field:"address"},
  {field:"city"},
  {field:"pincode"},
  { field: 'created_at'} 
];

// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
    floatingFilter: true
};

public rowData$!: Observable<any[]>;



  customer_report: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }


  ngOnInit(): void {

    
  }

  sendto(mobile) {
    this.router.navigate(['search-customer', mobile]);

  }

  onGridReady(params: GridReadyEvent) {
   
      
    this.jobService.customer_report()
    .subscribe(data => {
      console.log(data);
      this.customer_report = data;
      this.gridApi = params.api;
    });

    

  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();  }

 // Example of consuming Grid Event
 onCellClicked( e: CellClickedEvent): void {
  
 
  this.router.navigate(['search-customer',  e.data.mobile_number]);


}

}
