import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {


  id;
  productDetail;

  productDetails: any;
  name;
  descriptions;
  cover;
  original_price;
  constructor(private authService: AuthenticationService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;


    this.authService.edit_product_details(+this.id)
      .subscribe(data => {
        this.productDetails = data['data'];
        this.name = data['data']['name'];
        this.descriptions = data['data']['descriptions'];
        this.cover = data['data']['cover'];
        this.original_price = data['data']['original_price'];

        // alert(this.editForm.value.cover);

      });

  }

  checkout() {

    this.router.navigate(['checkout', this.id]);
  }

  d() {

  }
  ss() {

  }
}
