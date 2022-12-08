import { Component, OnInit } from '@angular/core';

import { Router ,ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.page.html',
  styleUrls: ['./brand-list.page.scss'],
})
export class BrandListPage implements OnInit {

constructor( private authService: AuthenticationService,private router: Router,private activatedRoute: ActivatedRoute) { }
brand_list;

  ngOnInit() {
  	this.getbrand_list();
  }


  getbrand_list() {
    this.authService.brand_list()
      .subscribe(
        data => {
          console.log("data", data);
          this.brand_list = data['data'];
        });

  }


  submit(query,id){
      this.router.navigate(['product-list',query,id]);
  }
}
