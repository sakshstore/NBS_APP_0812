import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  addForm: FormGroup;
  constructor(public toastController: ToastController, private authService: AuthenticationService,
    public modalController: ModalController, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'mobile_number': [null, Validators.required],
      'city': [null, Validators.required],
      'pincode': [null, Validators.required],
      'address': [null, Validators.required],


    });
  }



  submit() {
    this.authService.add_address(this.addForm.value)
      .subscribe((data) => {
        console.log("data", data);
        const toast = this.toastController.create({
          position: 'top',
          color: 'dark',
          message: data['message'],
          duration: 10000,


        });

        this.dismiss();
      });
  }

  dismiss() {

    this.modalController.dismiss(1);

  }
}
