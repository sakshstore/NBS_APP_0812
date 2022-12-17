import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', {static: false}) loginForm: NgForm;
  @ViewChild('loginForm1', {static: false}) loginForm1: NgForm;
  user;
  gauth;
  otp;
  msg:any;
  otp1:any;
  message:any;
  constructor(
    private authService : AuthService,
    private router: Router,private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  this.otp=false;
   localStorage.clear();

 
  }


checkGAUTH() {

  
        this.router.navigate(['report/job-work/top50' ]);
//     this.authService
//    .checkgoogleauth(this.loginForm.value)
//       .subscribe((data) => {

  
// if(!data['Error']){

// if(data['gauth']){
//   this.gauth=true;

// console.log("gauth",data['gauth']);
//   }


// if(data['otp']){
//   this.gauth=true;
//   console.log("otp",data['otp']);
//   this.otp1=true;
// this.otp=false;

// this.authService
//    .sendmail(this.loginForm.value)
//       .subscribe((data) => {
//       });
  
//   }


//   if(!data['gauth']){
//   this.otp1=false;
//   this.otp=true;
//    this.gauth=false;
//       this.authService
//       .login1(this.loginForm.value)
//       .subscribe((data) => {
//          console.log("msg",data['message'])
        

//         localStorage.setItem('token', data['access_token']);

//      window.localStorage.removeItem("roll");
//         window.localStorage.setItem("roll",data['user']['roll']    );

// if(data['user']['roll']==10){
// window.localStorage.removeItem("admin_balance");
//         window.localStorage.setItem("admin_balance",data['user']['balance']    );


//         this.router.navigate(['dashboard' ])


// }if(data['user']['roll']==0)
// {

// window.localStorage.removeItem("membership");
//         window.localStorage.setItem("membership",data['user']['membership']    );
//       window.localStorage.removeItem("plan");
//         window.localStorage.setItem("plan",data['user']['plan']    );
      

//         window.localStorage.removeItem("notification_fund_status");
//         window.localStorage.setItem("notification_fund_status",data['user']['notification_fund_status']);
//   this.router.navigate(['dashboard']);
// }



        
//       });
//   }
 
 

//  }
// else
// {
// this.msg=data['message'];
//  this._snackBar.open(this.msg, "Close", {
//       duration: 2000,

//       verticalPosition: 'top',
//       horizontalPosition: 'center'

//     });


  

// }


        
//       });
  }

checkGAUTH1() {
     this.router.navigate(['report/job-work/top50' ])
  
//     this.authService
//    .login(this.loginForm.value)
//       .subscribe((data) => {
//       console.log(data);
//        alert(data['message']);
// console.log("gauth",data['gauth']);
// if(data['gauth']){
//   this.gauth=true;
//   this.msg=data['message'];
//   this._snackBar.open(this.msg, "Close", {
//       duration: 2000,

//       verticalPosition: 'top',
//       horizontalPosition: 'center'

//     });
//  // alert(data['message']);
//   }
//   if(!data['gauth']){
//    this.gauth=false;
//    this.msg=data['message'];
//    this._snackBar.open(this.msg, "Close", {
//       duration: 2000,

//       verticalPosition: 'top',
//       horizontalPosition: 'center'

//     });
//   // alert(data['message']);
//   }
 
 
        
//       });
  }



  signIn() {


    this.authService
      .login1(this.loginForm.value)
      .subscribe((data) => {
         this.msg=data['message'];
this._snackBar.open(this.msg, "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
  // alert(data['message']);
console.log("token",data);
console.log("token1",data['Error']);

if(data['Error']==true){

        
}
if(data['Error']==false){
// alert(data['access_token']);
  localStorage.setItem('token', data['authToken']);

     window.localStorage.removeItem("roll");
        window.localStorage.setItem("roll",data['user']['roll']    );
      


if(data['user']['roll']==12){
   this.msg=data['message'];
   this._snackBar.open(this.msg, "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
//alert(data['message']);
        this.router.navigate(['report/job-work/top50' ])


}


if(data['user']['roll']==0)
{
 this.msg=data['message'];
   this._snackBar.open(this.msg, "Close", {
      duration: 2000,

      verticalPosition: 'top',
      horizontalPosition: 'center'

    });
//alert(data['message']);
//alert(data['membership']);
  this.router.navigate(['report/job-work/top50' ])
}

}

        
      });
  }
sendmail(){
this.otp1=true;


this.authService
   .sendmail(this.loginForm.value)
      .subscribe((data) => {
      });
  
}
}
