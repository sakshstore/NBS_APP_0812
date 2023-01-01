import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.page.html',
  styleUrls: ['./add-machine.page.scss'],
})
export class AddMachinePage {
  machine_list;
  addForm: FormGroup;
  msg;
  constructor(public modalController: ModalController, public toastController: ToastController, private formBuilder: FormBuilder,
    private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      'title': [null, Validators.required],
      'brand': [null, Validators.required],

      'model': [null, Validators.required],
      'machine_image': [null, Validators.required],

    });

  }

  submit() {
    this.authService.add_machine(this.addForm.value)
      .subscribe((data) => {
        console.log("data", data);
        const toast = this.toastController.create({
          position: 'top',
          color: 'dark',
          message: data['message'],
          duration: 10000,


        });
     
     
          window.localStorage.removeItem("machine_id");
          window.localStorage.setItem("machine_id", data['machine_id']);
          this.router.navigateByUrl('/address-list');
          this.dismiss();

       

      });
  }

  dismiss() {
    this.modalController.dismiss(2);

  }
}
