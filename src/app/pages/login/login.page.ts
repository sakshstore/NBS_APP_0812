
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
 
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
 
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,public toastController: ToastController,
    private loadingController: LoadingController
  ) {}
 show:boolean=false;

msg:any;
  ngOnInit() {


    


    this.credentials = this.fb.group({
      mobile: ['', [Validators.required]],
      otp: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
 
async login(){
    const loading = await this.loadingController.create();
   await loading.present();
   this.show=true;  
     this.authService.login(this.credentials.value).subscribe(
      async (data) => {
        console.log("data",data);
        await loading.dismiss();    
       
       // this.router.navigateByUrl('/dashboard', { replaceUrl: true });
      }); 

  
}

  async verify() {
    const loading = await this.loadingController.create();
   await loading.present();
   this.credentials.controls['mobile'].setValue(this.credentials.controls['mobile'].value);
    this.authService.verify(this.credentials.value).subscribe(
      async (data) => {
      	console.log("data",data);
        await loading.dismiss(); 
 
       
  // if(data['Error']==true){
  //     async (data) => {
  //     	//console.log("data",data);
  //       await loading.dismiss();
  //       const alert = await this.alertController.create({
  //         header:data['message'],
  //         message: data['Error'],
  //         buttons: ['OK'],
  //       });
 
  //       await alert.present();
  //     }

  //   }

     // if(data['Error']==false){
// alert(data['access_token']);

if(data['Error']==true){
  const toast = this.toastController.create({
    position: 'top',
    color: 'dark',
    message:  data.message ,
    duration: 10000,


  });


}

else
{

window.localStorage.setItem("token_type", data['token_type']);
        localStorage.setItem('access_token', data['access_token']);
        localStorage.setItem('token', data['access_token']);

        localStorage.setItem('login_status',  "true");

        this.authService.isAuthenticated.next(true);
        window.localStorage.setItem("roll",data['user']['roll']);
      this.router.navigateByUrl('/tabs/tab1', { replaceUrl: true });

    }



    });


    
  }
 
  // Easy access for form fields
  get email() {
    return this.credentials.get('mobile');
  }
  
  get password() {
    return this.credentials.get('otp');
  }


  register(){
  	  this.router.navigateByUrl('/register');
  }
}
