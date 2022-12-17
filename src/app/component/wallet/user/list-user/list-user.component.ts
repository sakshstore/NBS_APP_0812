import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";

import { JobService } from '../../../job.service';
 import { User } from 'src/app/models/user.model';
  import { ActivatedRoute, Params, ParamMap } from '@angular/router';

import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListUserComponent implements OnInit {

 dataSource;
type:any;
  columnsToDisplay = [];
  expandedElement: null;  

  users: User[];
    page = 1;
  pageSize = 4;
collectionSize;
// users.length;

loading:any;

testCount :any;



  constructor(private router: Router, private jobService: JobService,private _snackBar: MatSnackBar,private activatedRoute: ActivatedRoute) {
  
   }




  ngOnInit() {
this.type = this.activatedRoute.snapshot.params.type;
console.log(this.type)
 
this.loading=true;
this.testCount=1;

  // this.users=[ {id:3}];

    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
    // let token = localStorage.getItem('token');
  

  
    this.jobService.getUsers(this.type)
      .subscribe( data => {
      
        this.users = data;
        console.log(this.users);
this.collectionSize=this.users.length;

  
   this.testCount= this.users.length;
   this.dataSource = data;

this.columnsToDisplay = ['id','first_name','last_name','email','updated_at'];
expandedElement: User; 
       console.log(this.testCount);
window.localStorage.removeItem("students");
    window.localStorage.setItem("students", this.testCount);

this.loading=false;
 
 
        
 

      });
  }
 

sendtostatus(id): void {
 
   // alert(id);
     
    this.jobService.changeStatus(+id)
      .subscribe( data => {
       //this.users = data;
              this._snackBar.open("Approved Successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'
    });

    /*
this.router.navigate(['user/list-user']);
    this.jobService.getUsers1()
      .subscribe( data => {
      
        this.users = data;
        console.log(this.users);
         this.dataSource = data;

this.columnsToDisplay = ['id','first_name','email',  'created_at','updated_at'];
expandedElement: User; 
        });*/

        
      });





  }; 


  sendtoaccountstatus(id): void {
     
    this.jobService.deleteaccountstatus(+id)
      .subscribe( data => {
       this.users = data.result;
              this._snackBar.open("Deleted Successfully", "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
       
    });

    }
	
	
	
  deleteg2f(email): void {
     
    this.jobService.deleteg2f(email)
      .subscribe( data => {
       
              this._snackBar.open(data.message, "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
       
    });

    }
	
  changelogin(id): void {
    
    this.jobService.changelogin(id)
      .subscribe( data => {
       
              this._snackBar.open(data.message, "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
	
	
	window.localStorage.removeItem("token");
	localStorage.setItem('token', data['access_token']);
  window.localStorage.removeItem("roll");
   window.localStorage.setItem("roll",data['user']['roll']    );
		
		
		 this.router.navigate(['user-dashboard' ])
		
       
    });

    }


 sendto(id,email,name,balance){
     window.localStorage.removeItem("user_id1");
        window.localStorage.setItem("user_id1",id  );
        window.localStorage.removeItem("user_name");
        window.localStorage.setItem("user_name",name  );
        window.localStorage.removeItem("user_email");
        window.localStorage.setItem("user_email",email);
        window.localStorage.removeItem("user_balance");
        window.localStorage.setItem("user_balance",balance  );
        this.router.navigate(['bank-account']);
    }



}
