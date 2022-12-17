import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

import { JobService } from '../../job.service';
import { User } from 'src/app/models/user.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { AnonymousSubject } from 'rxjs/internal/Subject';
@Component({
  selector: 'app-add-job-work',
  templateUrl: './add-job-work.component.html',
  styleUrls: ['./add-job-work.component.css']
})
export class AddJobWorkComponent implements OnInit {
  mobile: any;

  problem_details;
  customer_mobile_number;
  city;
  pincode;
  address;
  machine_title;
  title;


  show: boolean = false;
  step1: boolean = false;
  step2: boolean = false;
  step3: boolean = false;
  step4: boolean = false;
  step5: boolean = false;
  machinesteps: boolean = false;
  count;
  panelOpenState = false;
  addForm: FormGroup;
  searchForm: FormGroup;
  jobsearchForm: FormGroup;
  customer_details: any;
  machine_list;
  address_list;
  addresssteps;

  machine;
  servicelist; machine_id;
  estimate_list;
  notes_list;
  message_list;

  isDisabled: boolean = false;
  job_work_list;
  files: File[] = [];


  showpage: any;
  machine_box: any;

  users: User[];
  msg: any; step: any;
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }


  ngOnInit(): void {



    this.mobile = this.activatedRoute.snapshot.params.mobile;



    this.jobService.search_customer_details(this.mobile)
      .subscribe(
        data => {
          this.showpage = true;

          console.log(data);


          if (!data['Error']) {

            this.customer_details = data['customer'];

            this.show = true;
            this.addForm.controls['customer_id'].setValue(data['customer']['customer_id']);


            this.machine_list = data['machine_list'];

            if (this.machine_list.length > 0) {
              this.machinesteps = false;

            }
            else {
              this.machinesteps = true;

            }


            this.notes_list = data['notes_list'];


          }

          else {





            this._snackBar.open(data['message'], "Close", {
              duration: 2000,

              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          }

        },
        error => {
          alert(error);
        });



    this.addForm = this.formBuilder.group({


      customer_id: [''],


      machine_id: [''],
      machine_title: [''],
      brand: [''],
      model: [''],
      machine_image: [''],



      title: [''],
      problem_details: [''],
      service_charge: [''],



    });

  }


  add_machine() {
    this.machinesteps = true;
  }



  onmachineSubmit2(machine) {

    this.addForm.controls['machine_id'].setValue(machine.id);

    this.machine_id = machine.id;


  }







  onsendfile(file: any, type1: any) {

    if (type1 == 'problem_image') {
      this.addForm.controls['image'].setValue(file);
    }
    if (type1 == 'machine_image') {
      this.addForm.controls['machine_image'].setValue(file);
    }



  }

  onRemove(event) {

    this.files.splice(this.files.indexOf(event), 1);
  }


  onSelect(event, type1) {
    console.log(event, type1);
    //alert(type1);

    this.files.push(...event.addedFiles);


    this.readFile(this.files[0]).then(fileContents => {
      // Put this string in a request body to upload it to an API.
      console.log(fileContents);

      this.onsendfile(fileContents, type1);
    });

  }



  onFilesAdded(event) {
    //  alert("189");

    console.log(event);
    this.files.push(...event.addedFiles);

    this.readFile(this.files[0]).then(fileContents => {
      // Put this string in a request body to upload it to an API.
      console.log(fileContents);
    });
  }

  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        return resolve((e.target as FileReader).result);
      };

      reader.onerror = e => {
        console.error("FileReader failed on file ${file.name}.");
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }

      reader.readAsDataURL(file);
    });
  }
  submit() {


    this.isDisabled = true;

    if (this.machine_id < 1)



      if (this.machine_list.length > 0) {

        if (this.addForm.value.machine_title.length < 1) {


          this._snackBar.open("Select or add machine", "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        }
      }


    this.jobService.customer_for_complain(this.addForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.router.navigate(['ticket-message-details', data['job_work_id']]);

        },
        error => {

          
    this.isDisabled = false;

    this._snackBar.open( "please check data and try again", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });


 
        });


  }
}
