import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
  private router: Router) { }
date;
  ngOnInit(): void {
  	 this.date=this.activatedRoute.snapshot.params.date;
  	 this.router.navigate(['report/job-work',this.date]);
  }

}
