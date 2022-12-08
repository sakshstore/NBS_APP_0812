import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
constructor( private authService: AuthenticationService,private router: Router,private activatedRoute: ActivatedRoute) { }

category_sub_list;
category_list;
subcategory_list;
  ngOnInit() {
// this.getcategory_list();
  	     this.authService.getCategoriesAndSubCategories()
      .subscribe(data => {
      	console.log(data);
        this.category_sub_list = data;
         
// alert(this.editForm.value.cover);

      });

  }
sendtoproduct(query,id){
      this.router.navigate(['product-list',query,id]);
  }
    getcategory_list() {
 
   this.authService.category_list()
      .subscribe(
        data => {
          console.log("data",data);
          this.category_list = data['data'];



      //      this.authService.subcategory_list()
      // .subscribe(
      //   data => {
      //     console.log("data",data);
      //     this.subcategory_list = data['data'];
      //   });
        });

  }


}
