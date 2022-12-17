import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
 import { User } from 'src/app/models/user.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { JobService } from '../../job.service';

@Component({
  selector: 'app-naviagtion',
  templateUrl: './naviagtion.component.html',
  styleUrls: ['./naviagtion.component.css']
})
export class NaviagtionComponent implements OnInit {


 closeResult: string;
  users: User[];
opened: boolean;
logo;
panelOpenState:boolean;

 center_name:any;



  constructor(
    public authService: AuthService,
    private router: Router,private modalService: NgbModal,private jobService: JobService
  ) {  }



  ngOnInit() {
//this.opened=false;


    this.jobService.getlogo()
      .subscribe( data => {
     // console.log("logo",data['logo']);
       this.logo=data['logo'];
      
});
    
   
this.opened=false;

  }
sendto(type){
//alert(id);
this.router.navigate(['user/userlist',type]);


//     this.jobService.getlogo()
//       .subscribe( data => {
//       console.log("logo",data['logo']);
//        this.logo=data['logo'];
      
// });
}



  logout() {

    this.authService.logout();
  
    this.router.navigate([ '/login' ]);
  }


  open1(){
 
  if(this.opened)
  {
  this.opened=false;
}
else
{
   this.opened=true;
}

  }



 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
