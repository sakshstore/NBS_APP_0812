import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
 
//private readonly http:///    baseurl = 'https://auth.globo4x.com/wallet/laravel/public/api/auth/';

  //domain="nbsbetaapi";


  private readonly baseurl = 'https://nbsbetaapi.sakshstore.com/index.php/api/auth/';
  //private readonly baseurl = 'https://auth.lgbank.xyz/bitf/public/api/auth/';
   //private readonly baseurl = 'https://exchangeapi.btcv.glovim.com/bitf/public/api/auth/';
  
  private readonly loginUrl1 = 'https://nbsbetaapi.sakshstore.com/index.php/api/auth/googleauthverify';
  private readonly registerUrl1 = 'https://nbsbetaapi.sakshstore.com/index.php/api/auth/register';
  private readonly loginUrl2 = 'https://nbsbetaapi.sakshstore.com/index.php/api/auth/login';
  

/*
  private readonly baseurl = 'https://nbsadmin.sakshstore.com/index.php/api/auth/';
  //private readonly baseurl = 'https://auth.lgbank.xyz/bitf/public/api/auth/';
   //private readonly baseurl = 'https://exchangeapi.btcv.glovim.com/bitf/public/api/auth/';
  
  private readonly loginUrl1 = 'https://nbsadmin.sakshstore.com/index.php/api/auth/googleauthverify';
  private readonly registerUrl1 = 'https://nbsadmin.sakshstore.com/index.php/api/auth/register';
  private readonly loginUrl2 = 'https://nbsadmin.sakshstore.com/index.php/api/auth/login';
  
  */  


  constructor(
    private http : HttpClient
  ) {  }

  register(body) {
    return this.http.post(this.baseurl+"register", body);
  }

  login(body) {
    return this.http.post(this.baseurl+"googleauthverify", body);
  }

login1(body) {
    return this.http.post(this.loginUrl2 , body);
  }


  checkgoogleauth(body) {
    return this.http.post(this.baseurl+"googleauthtest", body);
  }

sendmail(body){
return this.http.post(this.baseurl+"sendemail" , body);
  
}



  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
    
  }

  isAdmin() {
  let roll = window.localStorage.getItem("roll");
  
    return parseInt(roll)== 10;
    
  }



  isUser() {
  let roll = window.localStorage.getItem("roll");
  
    return parseInt(roll)!== 10;
    
  }

  getToken() {
    let token = localStorage.getItem('token');



    return token;
  }
}