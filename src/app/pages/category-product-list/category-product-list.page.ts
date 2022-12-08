import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.page.html',
  styleUrls: ['./category-product-list.page.scss'],
})
export class CategoryProductListPage implements OnInit {

  itemSizes;
	colors;
	productDetail;
	id;
	productDetails:any;
	name;
	descriptions;
	cover;
	product_list;
  constructor( private authService: AuthenticationService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {


 this.id = this.activatedRoute.snapshot.params.catId;
 

  	     this.authService.category_product_list(+this.id)
      .subscribe(data => {
      	console.log(data);
        this.product_list = data;
         
// alert(this.editForm.value.cover);

      });

}
}
