

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
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent, RowNode, } from 'ag-grid-community';


@Component({
  selector: 'app-job-work',
  templateUrl: './job-work.component.html',
  styleUrls: ['./job-work.component.css']
})

export class JobWorkComponent implements OnInit {



  selectedEngineer: any;



  private gridApi!: GridApi;

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'job_work_id', headerName: 'Job Work ID' },
    { field: 'job_work_title', headerName: 'Job Title' },
    { field: 'engineer_name', headerName: 'Engineer name' },
    {
      field: 'job_work_status', headerName: 'Status',

      getQuickFilterText: params => {

        


        return params.value.name;
      }

    },
    { field: 'service_charge',headerName: 'Service charge' },

    { field: 'amount' },



    {
      field: 'job_work_created_at', headerName: 'Created_at',

      filter: 'agDateColumnFilter',
      // add extra parameters for the date filter
      filterParams: {
        // provide comparator function
        comparator: (filterLocalDateAtMidnight, cellValue) => {



          const dateAsString = cellValue;

          const cell_date = new Date(cellValue);

          if (dateAsString == null) {
            return 0;
          }

          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          //  const dateParts = dateAsString.split('/');
          const day = cell_date.getDate();//   Number(dateParts[2]);
          const month = cell_date.getMonth();// Number(dateParts[1]) - 1;
          const year = cell_date.getFullYear();//   Number(dateParts[0]);
          const cellDate = new Date(year, month, day);

          // console.log(cell_date);
          // console.log(filterLocalDateAtMidnight);
          //  return 1;
          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {

            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {

            return 1;
          }

          return 0;
        }

      }
    }
    ,





    { field: 'job_work_note', headerName: 'Remark', },
    { field: 'name' },
    { field: 'mobile_number', headerName: 'Mobile number', },
    { field: 'machine_title', headerName: 'Machine title', },
    { field: 'brand' },

    { field: 'model' },


  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true
  };

  public rowData$!: Observable<any[]>;

  public rowSelection = 'single';
  show;
  job_work_report: any;
  constructor(private formBuilder: FormBuilder, private router: Router, private jobService: JobService,
    private _snackBar: MatSnackBar, private modalService: NgbModal) {
  }



  isExternalFilterPresent(): boolean {
    // if ageType is not everyone, then we are filtering
    return ageType !== 'open' || engineer_name !== "All";
  }



  externalFilterChanged(Type: string, newValue: string) {


    FilterType = Type;

    if (Type == "status") {
      ageType = newValue;
    }
    else {
      engineer_name = newValue;

    }
    this.gridApi.onFilterChanged();
  }


  ngOnInit(): void {

    this.show = false;
    this.getengineer_list();
  }

  clearFilters() {
    this.externalFilterChanged('status', 'All');

    this.gridApi.setFilterModel(null);

    //this.gridApi.setQuickFilter('Open');


  }



  doesExternalFilterPass(node: RowNode): boolean {

    var st = true;
    var en = true;

    /*
    if (FilterType = "status") {
      if (ageType == "All") {
        st = true;
      }
      console.log(ageType);
      console.log(engineer_name);


   



      if (ageType == "Closed") {
        if (node.data.job_work_status == "Closed")
          st = true;

        if (node.data.job_work_status == "Incomplete_closed")
          st = true;
      }
      else {
        st = node.data.job_work_status == ageType;

      }
      return st;
    }
*/


    if (engineer_name == "All")
      en = true;
    else

      en = node.data.engineer_name == engineer_name;


    return en;


  }

  onGridReady(params: GridReadyEvent) {


    this.jobService.job_work_report("all")
      .subscribe(
        data => {

          this.show = true;
          this.job_work_report = data;



          this.gridApi = params.api;

        });





  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }


  onSelectionChanged() {
    const selectedRows = this.gridApi.getSelectedRows();

    console.log(selectedRows);
    const job_work_id = selectedRows.length === 1 ? selectedRows[0].job_work_id : '';

    console.log(job_work_id);


    this.router.navigate(['ticket-message-details', job_work_id]);


  }



  getengineer_list() {
    this.jobService.engineer_list()
      .subscribe(
        data => {
          console.log(data);
          this.engineers_list = data;
        });

  }

  engineers_list;
}
var ageType = 'open';

var FilterType = "job_work_status";



var engineer_name = "All";