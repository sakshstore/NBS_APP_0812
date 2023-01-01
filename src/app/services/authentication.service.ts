

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

import { Storage } from '@capacitor/storage';



import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../model/user';

import { CacheService } from "ionic-cache";



const TOKEN_KEY = 'my-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  token = '';

  private readonly baseurl = "https://nbsbetaapi.sakshstore.com/index.php/api/";


  //baseUrl = 'https://nbsbetaapi.sakshstore.com/index.php/api/';



  constructor(private http: HttpClient, private cache: CacheService) {
    this.loadToken();
    cache.setDefaultTTL(60 * 60); //set default cache TTL for 1 hour
  }

  async loadToken() {
    const token = await Storage.get({ key: TOKEN_KEY });
    if (token && token.value) {
      console.log('set token: ', token.value);
      this.token = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  login(credentials: { mobile }): Observable<any> {
    // return this.http.post(this.baseurl+'auth/googleauthtest', credentials)
    return this.http.post(this.baseurl + "auth/loginwithmobile", credentials).pipe(
      map((data: any) => data.access_token),
      switchMap(token => {
        console.log("token", token);
        return from(Storage.set({ key: TOKEN_KEY, value: token }));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  verify(credentials: { mobile }): Observable<any> {
    return this.http.post(this.baseurl + 'auth/verifyotpwithmobile', credentials)
    // return this.http.post(this.baseurl+"auth/verifyotpwithmobile", credentials).pipe(
    //   map((data: any) => data.access_token),
    //   switchMap(token => {
    //       console.log("token",token);
    //     return from(Storage.set({key: TOKEN_KEY, value: token}));
    //   }),
    //   tap(_ => {
    //     this.isAuthenticated.next(true);
    //   })
    // )
  }


  register(credentials: { email, password }): Observable<any> {
    return this.http.post(this.baseurl + 'auth/register', credentials);
    // return this.http.post(this.baseurl+"auth/register", credentials).pipe(
    //   map((data: any) => data.token),
    //   switchMap(token => {
    //     return from(Storage.set({key: TOKEN_KEY, value: token}));
    //   }),
    //   tap(_ => {
    //     this.isAuthenticated.next(true);
    //   })
    // )
  }

  logout(): Promise<void> {
    this.isAuthenticated.next(false);
    return Storage.remove({ key: TOKEN_KEY });
  }


  add_job_work(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.post<User[]>(this.baseurl + 'auth/customersystem/add_job_work', data, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

  job_work_details(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/job_work_byid?id=' + id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

  address_details(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/address_byid?id=' + id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }


  machine_details(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/machine_byid?id=' + id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }
  estimate_list(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/estimate_list?id=' + id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

  accept_complain_status(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/accept_complain_status?id=' + id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

  close_complain_status(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/close_complain_status?id=' + id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }
  job_work_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/job_work_list', { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }



  customer_machine_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/customer_machine_list', { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

  add_machine(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.post<User[]>(this.baseurl + 'auth/customersystem/add_machine', data, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }


  customer_address_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/customersystem/customer_address_list', { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

  add_address(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.post<User[]>(this.baseurl + 'auth/customersystem/add_address', data, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }


  //product


  product_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    /*
        return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/products/getAll', { headers: headers })
          .pipe(
            catchError(e => throwError(e))
    
          );
          */
    let url = this.baseurl + 'auth/adminecommerce/products/getAll';

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));


  }

  edit_product_details(id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
 
        return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/products/getProductById?product_id=' + id, { headers: headers })
          .pipe(
            catchError(e => throwError(e))
    
          );
        
   /*
    let url = this.baseurl + 'auth/adminecommerce/products/getProductById?product_id=' + id;

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));
  */
 
  }

  customer_browsing_history(id: any): Observable<any> {

    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<any>(this.baseurl + 'auth/ecommerce/customer_browsing_history/' + id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }




  add_new_order(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.post<User[]>(this.baseurl + 'auth/ecommerce/orders/add_customer_order', data, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }



  order_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/ecommerce/orders/orderlist_bycustomer', { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }
  category_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    /*
        return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/categories/getAll', { headers: headers })
          .pipe(
            catchError(e => throwError(e))
    
          );
    */

    let url = this.baseurl + 'auth/adminecommerce/categories/getAll';

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));

  }
  subcategory_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    /*
        return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/sub_cate/getAll', { headers: headers })
          .pipe(
            catchError(e => throwError(e))
    
          );
          */

    let url = this.baseurl + 'auth/adminecommerce/sub_cate/getAll';

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));

  }



  browsing_history(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });


    let url = this.baseurl + 'auth/ecommerce/get_browsing_history';
    /*
        return this.http.get<any>( url, { headers: headers })
        .pipe(
          catchError(e => throwError(e))
    
        );
    */


    //   let url = this.baseurl + 'auth/ecommerce/get_browsing_history';

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));





  }



  category_product_list(category_id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    /*
        return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/products/category_product_list?category_id=' + category_id, { headers: headers })
          .pipe(
            catchError(e => throwError(e))
    
          );
          */


    let url = this.baseurl + 'auth/adminecommerce/products/category_product_list?category_id=' + category_id;

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));


  }


  getCategoriesAndSubCategories(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    /*
    return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/categories/getCategoriesAndSubCategories', { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
      */



    let url = this.baseurl + 'auth/adminecommerce/categories/getCategoriesAndSubCategories';

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));



  }

  brand_list(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    /*

    return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/brands/getAll', { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );

*/


    let url = this.baseurl + 'auth/adminecommerce/brands/getAll';

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));


  }
  query_product_list(query: string, query_id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });
    /*
        return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/categories/query_product_list?query=' + query + '&query_id=' + query_id, { headers: headers })
          .pipe(
            catchError(e => throwError(e))
    
          );
    */
    let url = this.baseurl + 'auth/adminecommerce/categories/query_product_list?query=' + query + '&query_id=' + query_id;

    let cacheKey = url;

    let request = this.http.get(url, { headers: headers, observe: 'response' });
    return this.cache.loadFromObservable(cacheKey, request).pipe(map(res => res.body));


  }

  get_order_details(order_id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/ecommerce/orders/get_order_details/' + order_id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );
  }

  edit_productbyid(order_id: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': window.localStorage.getItem("token_type") + " " + window.localStorage.getItem("access_token")
    });

    return this.http.get<User[]>(this.baseurl + 'auth/adminecommerce/orders/edit_productbyid?order_id=' + order_id, { headers: headers })
      .pipe(
        catchError(e => throwError(e))

      );




  }

}
