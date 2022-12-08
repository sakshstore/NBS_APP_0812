
import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-machineform',
  templateUrl: './machineform.page.html',
  styleUrls: ['./machineform.page.scss'],
})

export class MachineformPage {
  addForm: FormGroup;
  msg;
  constructor(public toastController: ToastController, private formBuilder: FormBuilder,
    private authService: AuthenticationService, private router: Router) { }


  ngOnInit() {
    let t2 = window.localStorage.getItem("address_id");
    let t = window.localStorage.getItem("machine_id");
    this.addForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'problem_details': [null, Validators.required],
      'machine_id': [t],
      'address_id': [t2],

    });

  }

  submit() {


    let job_work_json = JSON.stringify(this.addForm.value);



    window.localStorage.removeItem("job_work_json");
    window.localStorage.setItem("job_work_json", job_work_json);


    this.router.navigateByUrl('payment/jobwork');

    /*

    this.authService.add_job_work(this.addForm.value)
      .subscribe((data) => {
        console.log("data", data);
        const toast = this.toastController.create({
          position: 'top',
          color: 'dark',
          message: data['message'],
          duration: 10000,


        });
        window.localStorage.removeItem("job_work_id");
        window.localStorage.setItem("job_work_id", data['job_work_id']);


        window.localStorage.removeItem("jobwork");
        window.localStorage.setItem("jobwork", data['jobwork']);

        this.router.navigateByUrl('payment/jobwork');
      });

      */
  }


  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }


}
