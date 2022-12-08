import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials: FormGroup;
login_otp:any;
 constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    private loadingController: LoadingController
  ) {}
 
  ngOnInit() {
  	 this.credentials = this.fb.group({
  	 name: [],
      email: ['eve.holt@reqres.in', [Validators.required, Validators.email]],
      password: ['cityslicka', [Validators.required, Validators.minLength(6)]],
    });
  }

    async register() {
    const loading = await this.loadingController.create();
    // await loading.present();
    
    this.authService.register(this.credentials.value)
    	 .subscribe(data => {
        this.presentAlert('Register Successfully', 'Email Sent. Check your inbox');
      console.log("data",data);
      }, (err) => {
        console.log(err);
      });
      // async (res) => {
      //   await loading.dismiss();        
      //   this.router.navigateByUrl('/login', { replaceUrl: true });
      // },
      // async (res) => {
      //   await loading.dismiss();
      //   const alert = await this.alertController.create({
      //     header: 'Register failed',
      //     message: res.error.error,
      //     buttons: ['OK'],
      //   });
 
      //   await alert.present();
      // }
    // );

    // );
  }

    async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [{
          text: 'OK',
          handler: () => {
            this.login_otp=true;
           // this.router.navigate(['tabs/tab1']);
            //this.loading=false;
          }
        }]
    });

    await alert.present();
  }


    // Easy access for form fields
  get email() {
    return this.credentials.get('email');
  }
  
  get password() {
    return this.credentials.get('password');
  }
login(){
  	  this.router.navigateByUrl('/login');
  }
  }


