import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddMachinePage } from '../pages/add-machine/add-machine.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  machine_list; job_work_report: any; msg;

  show;
  constructor(public modalController: ModalController,
    private authService: AuthenticationService, private router: Router) { }


  ngOnInit() {

    this.show = false;


    this.loaddata();

  }

  doRefresh(event) {
    this.loaddata();
  }

  loaddata() {
    this.authService.customer_machine_list()
      .subscribe(
        data => {
          console.log(data);
          this.machine_list = data;
        });


    this.authService.job_work_list()
      .subscribe(data => {

        console.log("data", data);
        this.job_work_report = data;



        this.show = true;


      });

  }


  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  submit(id) {
    window.localStorage.removeItem("machine_id");
    window.localStorage.setItem("machine_id", id);
    this.router.navigateByUrl('/address-list');
  }

  async add() {
    const modal = await this.modalController.create({
      component: AddMachinePage,
      breakpoints: [0, 0.2, 0.5, 1],
      initialBreakpoint: 0.8,

      componentProps: {

      }
    });
    modal.onDidDismiss()
      .then((data) => {
        this.authService.customer_machine_list()
          .subscribe(
            data => {
              console.log(data);
              this.machine_list = data;
            });
      });

    return await modal.present();
    //this.router.navigateByUrl('/add-machine');
  }

  list() {
    this.router.navigateByUrl('/ticket-history');
  }



  send_to_complain(id) {
    window.localStorage.removeItem("job_work_id");
    window.localStorage.setItem("job_work_id", id);

    this.router.navigateByUrl('complain-details');
  }


}
