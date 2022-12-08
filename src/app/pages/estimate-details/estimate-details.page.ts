import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.page.html',
  styleUrls: ['./estimate-details.page.scss'],
})
export class EstimateDetailsPage implements OnInit {
  id;
  estimate_id;
  created_at;
  estimate_total;
  estmate_details;
  title;
  constructor(public toastController: ToastController, private authService: AuthenticationService, public modalController: ModalController) { }

  ngOnInit() {

    let t = window.localStorage.getItem("job_work_id");
    this.id = t;


    this.authService.estimate_list(+t)
      .subscribe(data => {

        console.log("data", data);
        this.estmate_details = data;
        //      this.estimate_id = data['estimate_id'];
        //      this.created_at = data['created_at'];
        //        this.estimate_total = data['estimate_total'];
        // this.title = data['title'];
      });

  }

  dismiss() {

    this.modalController.dismiss(1);

  }


  accept_estimate(id) {
    this.authService.accept_complain_status(id)
      .subscribe(
        data => {
          console.log(data);
          console.log(data);
          const toast = this.toastController.create({
            position: 'top',
            color: 'dark',
            message: data['message'],
            duration: 10000,


          });

          this.ngOnInit();


        })
  }

  reject_complain(id) {
    this.authService.close_complain_status(id)
      .subscribe(
        data => {
          console.log(data);
          const toast = this.toastController.create({
            position: 'top',
            color: 'dark',
            message: data['message'],
            duration: 10000,


          });
          this.dismiss();

          this.ngOnInit();


        })
  }

}
