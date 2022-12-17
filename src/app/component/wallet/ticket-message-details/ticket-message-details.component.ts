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
  selector: 'app-ticket-message-details',
  templateUrl: './ticket-message-details.component.html',
  styleUrls: ['./ticket-message-details.component.css']
})





export class TicketMessageDetailsComponent implements OnInit {
  closeResult: string;
  randNumber: any;
  show: boolean = false;
  show_page: boolean = false;
  panelOpenState = false;
  addproductForm: FormGroup;
  editproductForm: FormGroup;
  product_list;
  part_productlist;
  assign_engineer_history: any;
  customer: any;

  customer_job_work_history: any;
  customer_machine_list: any;
  customer_address_list: any;

  job_work: any;

  machine: any;
  address: any;
  id: any;
  arrayText: any[];

  arrayProduct = [];
  engineers: any;
  addengineerForm: FormGroup;
  editaddressForm: FormGroup;
  addaddressForm: FormGroup;
  engineer_id: any;
  assign_engineer_list: any;
  assign_engineer_name: any;
  assign_date: any;

  Job_work_status: any;

  visible_generate_bar_code: any;
  visible_assign_engineer: any;
  visible_close_complain: any;
  visible_hold_complain: any;
  visible_deposit_machine: any;
  visible_send_delivery_otp: any;
  visible_verify_delivery_otp: any;
  visible_reopen_complain: any;
  visible_incomplete_close: any;
  currentMachine_id;
  job_work_note: any;
  currentCustomer_id; job_work_note_list: any;
  hash;
  add_job_work_note_form: FormGroup;
  print_job_work: string;
  visible_deliver_machine: any;
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router, private jobService: JobService, private _snackBar: MatSnackBar, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.print_job_work=this.jobService.print_job_work;

    

    this.id = this.activatedRoute.snapshot.params.id;
    this.addengineerForm = this.formBuilder.group({
      id: [''],
      engineer_id: [''],
      notes: [''],
      job_work_id: [this.id],

    });


    this.add_job_work_note_form = this.formBuilder.group({

      job_work_id: [this.id],
      job_work_note: [''],


    });

    this.job_work = "";

    this.show_page = false;

    this.getJobWorkDetails(this.id);




  }



  getJobWorkDetails(id) {
    this.jobService.get_job_work(this.id)
      .subscribe(data => {
        console.log(data);

        if (!data['Error']) {


          this.show_page = true;

          this.job_work = data['job_work'];
          this.Job_work_status = data['job_work']['status'];
          this.job_work_note = data['job_work']['job_work_note'];

          this.hash = data['hash'];

          this.customer = data['job_work']['customer'];

          this.machine = data['job_work']['machine'];

          this.product_list = data['job_work']['product_list'];

          console.log("product_list", this.product_list)

          this.customer_job_work_history = data['job_work']['customer_job_work_history'];

          this.customer_machine_list = data['job_work']['customer_machine_list'];

          this.customer_address_list = data['job_work']['customer_address_list'];


          this.job_work_note_list = data['job_work']['job_work_note_list'];

          this.engineer_id = data['job_work']['engineer_id'];

          this.assign_engineer_history = data['job_work']['assign_engineer_history'];

          this.visible_generate_bar_code = data['buttons']['visible_generate_bar_code'];
          this.visible_assign_engineer = data['buttons']['assign_engineer'];
          this.visible_close_complain = data['buttons']['close_complain'];
          this.visible_hold_complain = data['buttons']['hold_complain'];
          this.visible_deposit_machine = data['buttons']['deposit_machine'];
          this.visible_send_delivery_otp = data['buttons']['send_delivery_otp'];
          this.visible_verify_delivery_otp = data['buttons']['verify_delivery_otp'];
          this.visible_reopen_complain = data['buttons']['reopen_complain'];
          this.visible_incomplete_close = data['buttons']['visible_incomplete_close'];
          this.visible_deliver_machine = data['buttons']['visible_deliver_machine'];

 

          this.currentCustomer_id = this.job_work['customer_id'];




        }

        else {

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

        }
      });
  }


  btnengineersubmit: boolean = true;

  engineersubmit() {

    this.btnengineersubmit = false;

    this.jobService.assign_engineer(this.addengineerForm.value)
      .subscribe(data => {
        console.log(data); 
        this.ngOnInit();
 
        this.modalService.dismissAll(this);

        this.btnengineersubmit = true;
      });

  }

  getpart_product_list() {
    this.jobService.part_product_list(this.id, this.job_work['customer_id'])
      .subscribe(data => {
        console.log(data);
        this.product_list = data;
      });

  }

  productSubmit() {



    this.jobService.add_part_product(this.addproductForm.value)
      .subscribe(
        data => {



          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });

          this.getpart_product_list();
          this.modalService.dismissAll(this);



        },
        error => {
          alert(error);


          console.log(error);
        });





  }







  assign_engineer(content9, id) {
    this.jobService.engineer_list()
      .subscribe(
        data => {
          console.log(data);
          this.engineers = data;


        });

    this.modalService.open(content9, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });





  }

  open(content) {


    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open1(content1) {


    this.modalService.open(content1, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.addaddressForm = this.formBuilder.group({
      address_id: [''],
      name: [''],
      mobile_number: [''],
      city: [''],
      pincode: [''],
      address: [''],
      customer_id: [this.job_work['customer_id']]

    });
  }


  open2(content2) {


    this.modalService.open(content2, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.addproductForm = this.formBuilder.group({



      product_name: [''],
      product_amount: [''],
      productjson: [''],

      job_work_id: [this.id],
      customer_id: [this.job_work['customer_id']],
    });
  }


  open3(content3, id) {


    this.modalService.open(content3, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });



    this.editproductForm = this.formBuilder.group({

      id: [''],
      product_name: [''],
      product_amount: [''],

      job_work_id: [this.id],
      customer_id: [],
      created_at: [],

    });

    this.jobService.partproduct_detailsbyid(+id)
      .subscribe(data => {
        this.editproductForm.setValue(data);


      });


  }

  delete_part_product(id) {

    this.jobService.delete_part_product(+id)
      .subscribe(data => {
        console.log(data);

        this._snackBar.open(data['message'], "Close", {
          duration: 2000,

          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      });


    this.getpart_product_list();
  }

  productUpdate() {


    this.jobService.update_partproduct(this.editproductForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          this.getpart_product_list();
          this.modalService.dismissAll(this);
        },
        error => {
          alert(error);
        });
  }

  delete_address(id) {
    this.jobService.delete_address(+id)
      .subscribe(data => {
        console.log(data);

        this._snackBar.open(data['message'], "Close", {
          duration: 2000,

          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      });

  }

  delete_machine(id) {

    this.jobService.delete_machine(+id)
      .subscribe(data => {
        console.log(data);

        this._snackBar.open(data['message'], "Close", {
          duration: 2000,

          verticalPosition: 'top',
          horizontalPosition: 'center'
        });

      });

  }

  updateaddressSubmit() {
    this.jobService.update_address(this.editaddressForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          // this.getpart_product_list();
          this.modalService.dismissAll(this);
        },
        error => {
          alert(error);
        });
  }

  addaddressSubmit() {
    this.jobService.add_address(this.addaddressForm.value)
      .subscribe(
        data => {
          console.log(data);

          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
          // this.getpart_product_list();
          this.modalService.dismissAll(this);
        },
        error => {
          alert(error);
        });
  }


  open4(content4, id) {


    this.modalService.open(content4, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.editaddressForm = this.formBuilder.group({
      address_id: [''],
      name: [''],
      mobile_number: [''],
      city: [''],
      pincode: [''],
      address: [''],
      customer_id: ['']

    });

    this.jobService.edit_addressbyid(+id)
      .subscribe(data => {
        this.editaddressForm.setValue(data);


      });


  }




  open5(content5) {


    this.modalService.open(content5, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }




  open6(content6, id) {


    this.modalService.open(content6, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.currentMachine_id = id;

  }


  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  sendto(id) {


    this.id = id;


    this.router.navigate(['ticket-message-details', id]);



    this.getJobWorkDetails(id);


  }


  submit() {

    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    this.randNumber = val
    alert(this.randNumber);
    this.show = true;
  }


  close_complain(id) {
    this.jobService.close_complain_status(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }

  inclose_complain(id) {
    this.jobService.inclose_complain_status(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }
  hold_complain(id) {
    this.jobService.hold_complain_status(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }



  deliver_machine(id) {
    this.jobService.deliver_machine_status(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }



  send_delivery_otp(id) {
    this.jobService.send_delivery_otp(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }


  verify_delivery_otp(id) {
    this.jobService.verify_delivery_otp(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }



  reopen_complain(id) {
    this.jobService.reopen_complain(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }



  delivery_machine(id) {
    this.jobService.delivery_machine_status(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();



        })
  }

  deposit_machine(id) {
    this.jobService.deposit_machine_status(id)
      .subscribe(
        data => {
          console.log(data);
          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });


          this.ngOnInit();


        })
  }






  submitJobWorkNote() {
    this.jobService.add_job_work_note(this.add_job_work_note_form.value)
      .subscribe(
        data => {
          console.log(data);


          this.getJobWorkDetails(this.id)


          this._snackBar.open(data['message'], "Close", {
            duration: 2000,

            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
        });
  }



}
