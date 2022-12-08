import { AuthenticationService } from '../../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-history',
  templateUrl: './ticket-history.page.html',
  styleUrls: ['./ticket-history.page.scss'],
})
export class TicketHistoryPage {
  job_work_report;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.authService.job_work_list()
      .subscribe(data => {

        console.log("data", data);
        this.job_work_report = data;
      });


  }



  sendto(id) {
    window.localStorage.removeItem("job_work_id");
    window.localStorage.setItem("job_work_id", id);

    this.router.navigateByUrl('complain-details');
  }

}
