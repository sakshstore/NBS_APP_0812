import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SupportmessagePage } from '../supportmessage/supportmessage.page';
import { EstimateDetailsPage } from '../estimate-details/estimate-details.page';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-complain-details',
  templateUrl: './complain-details.page.html',
  styleUrls: ['./complain-details.page.scss'],
})
export class ComplainDetailsPage implements OnInit {
  job_work_details;
  title;
  problem_details;
  address_details;
  mobile_number;
  city;
  pincode; address;
  machine_details;
  brand;
  year_of_purchase;
  model;
  id;
  machine_id;
  machine_title;
  address_id; product_list;
  status;


  accept_btn_visible: boolean = false;
  cancel_btn_visible: boolean = false;



  constructor(private authService: AuthenticationService,
    public toastController: ToastController, private router: Router,
    public modalController: ModalController) { }

  ngOnInit() {
    let t = window.localStorage.getItem("job_work_id");
    this.id = t;

    this.accept_btn_visible = false;
    this.cancel_btn_visible = false;

    this.loaddata(this.id);
  }


  loaddata(id) {

    this.authService.job_work_details(+id)
      .subscribe(data => {

        console.log("data", data);
        this.job_work_details = data;
        this.title = data['title'];
        this.status = data['status'];
        this.problem_details = data['problem_details'];
        this.machine_id = data['machine_id'];
        this.address_id = data['address_id'];

        this.product_list = data['product_list'];

        this.accept_btn_visible = data['accept_btn_visible'];

        this.cancel_btn_visible = data['cancel_btn_visible'];




        this.authService.address_details(+this.address_id)
          .subscribe(data => {

            console.log("data", data);
            this.address_details = data;
            this.mobile_number = data['mobile_number'];
            this.city = data['city'];
            this.pincode = data['pincode'];
            this.address = data['address'];


          });

        // let t2 = window.localStorage.getItem("machine_id");
        this.authService.machine_details(+this.machine_id)
          .subscribe(data => {

            console.log("data", data);
            this.machine_details = data;
            this.machine_title = data['title'];
            this.brand = data['brand'];
            this.year_of_purchase = data['year_of_purchase'];
            this.model = data['model'];


          });

      });
  }


  backbtn() {

    this.router.navigate(['/tabs/tab2']);
  }


  doRefresh(event) {
    this.loaddata(this.id);
  }


  async openModal() {


    const modal = await this.modalController.create({
      component: SupportmessagePage,
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.2,

      componentProps: {

      }
    });
    modal.onDidDismiss()
      .then((data) => {
      });

    return await modal.present();

  }



  accept_estimate(id) {
    this.authService.accept_complain_status(id)
      .subscribe(
        data => {

          const toast = this.toastController.create({
            position: 'top',
            color: 'dark',
            message: data['message'],
            duration: 10000,


          });



          this.router.navigate(['/tabs/tab2']);

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



          this.router.navigate(['/tabs/tab2']);

        })
  }


}