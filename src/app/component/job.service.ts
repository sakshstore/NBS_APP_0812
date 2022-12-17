import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';

import { ApiResponse } from "../models/api.response";
import { Transaction } from "../models/transaction.model";
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Document } from "../models/document.model";


@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

  /*
  baseUrl = 'https://nbsadmin.sakshstore.com/index.php/api/';

  // baseUrlauth =  'https://guardapi.glovim.ltd/api/auth/';
  baseUrlauth = 'https://nbsadmin.sakshstore.com/index.php/api/auth';

*/


  
  baseUrl = 'https://nbsbetaapi.sakshstore.com/index.php/api/';

  // baseUrlauth =  'https://guardapi.glovim.ltd/api/auth/';
  baseUrlauth = 'https://nbsbetaapi.sakshstore.com/index.php/api/auth';

 public  print_job_work= 'https://nbsbetaapi.sakshstore.com/index.php/print_get_job_work';

  bar_code_url= 'https://nbsbetaapi.sakshstore.com/index.php/print_get_job_work/';




  // private readonly baseurl = 'https://auth.lgbank.xyz/bitf/public/api/auth/';

  customer_details(mobile: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/customer_details' + '/' + mobile);
  }
  estimate_listby_customer(customer_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/estimate_listby_customer?customer_id=' + customer_id);
  }

  edit_engineer_details(engineer_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/edit_engineer_details?engineer_id=' + engineer_id);
  }
  message_listby_customer(customer_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/message_listby_customer?customer_id=' + customer_id);
  }

  notes_listby_customer(customer_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/notes_listby_customer?customer_id=' + customer_id);
  }


  machine_listby_customer(customer_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/machine_listby_customer?customer_id=' + customer_id);
  }


  delete_engineer(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/delete_engineer?id=' + id);
  }
  engineer_job_list(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/engineer_job_list?id=' + id);
  }


  employee_work_summery(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminreport/employee_work_summery');
  }



  close_complain_status(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/close_complain_status?job_work_id=' + job_work_id);
  }
  inclose_complain_status(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/inclose_complain_status?job_work_id=' + job_work_id);
  }
  hold_complain_status(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/hold_complain_status?job_work_id=' + job_work_id);
  }

  deliver_machine_status(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/deliver_machine_status?job_work_id=' + job_work_id);
  }





  send_delivery_otp(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/send_delivery_otp?job_work_id=' + job_work_id);
  }
  verify_delivery_otp(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/verify_delivery_otp?job_work_id=' + job_work_id);
  }
  reopen_complain(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/reopen_complain?job_work_id=' + job_work_id);
  }



  delivery_machine_status(job_work_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/delivery_machine_status?job_work_id=' + job_work_id);
  }

  deposit_machine_status(job_work_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/deposit_machine_status?job_work_id=' + job_work_id);
  }
  //brand
  add_brand(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/brands/create', user);
  }

  update_brand(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/brands/update', user);
  }
  brand_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminecommerce/brands/getAll');
  }

  delete_brand(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/brands/destroy?id=' + id);
  }

  edit_brand_details(brand_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/brands/getById?brand_id=' + brand_id);
  }


  //orderhistory1



  edit_productbyid(order_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/orders/edit_productbyid?order_id=' + order_id);
  }

  order_book(orderId: number, productId: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/orders/order_book?order_id=' + orderId + '&product_id=' + productId);
  }
  add_order_note(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/orders/add_order_note', user);
  }
  add_shipping_details(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/orders/add_shipping_details', user);
  }

  new_customer_for_order(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/orders/new_customer_for_order', user);
  }

  orders_history(search_date: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminecommerce/orders/orders_history/' + search_date);
  }

  order_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminecommerce/orders/getAll');
  }
  add_order(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/orders/create', user);
  }

  get_order_details(order_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/orders/get_order_details?order_id=' + order_id);
  }

  edit_order_details(order_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/orders/getById?order_id=' + order_id);
  }

   

  order_status_update(order_id: number, status: any): Observable<any> {


    var order_query = {
      "order_id": order_id,
      "status": status
    };


    return this.http.post<any>(this.baseUrl + 'auth/adminecommerce/orders/order_status_update', order_query);
  }



  update_order(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/orders/update_order', user);
  }

  delete_productorder(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/orders/destroy?id=' + id);
  }
  order_seacrh_customer(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/orders/order_seacrh_customer', user);
  }

  customer_for_order(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/orders/customer_for_order', user);
  }

  //category
  add_category(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/categories/create', user);
  }

  update_category(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/categories/update', user);
  }
  category_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminecommerce/categories/getAll');
  }

  delete_category(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/categories/destroy?id=' + id);
  }

  edit_category_details(category_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/categories/getById?category_id=' + category_id);
  }



  //subcategory
  add_subcategory(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/sub_cate/create', user);
  }

  update_subcategory(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/sub_cate/update', user);
  }
  subcategory_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminecommerce/sub_cate/getAll');
  }

  delete_subcategory(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/sub_cate/destroy?id=' + id);
  }

  edit_subcategory_details(subcategory_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/sub_cate/getById?subcategory_id=' + subcategory_id);
  }

  //product
  add_product(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/products/create', user);
  } 
  
  
  importsproductcsv(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/imports/productcsv', user);
  }



  



  update_product(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminecommerce/products/update', user);
  }
  product_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminecommerce/products/getTopList');
  }

  delete_product(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/products/destroy?id=' + id);
  }

  edit_product_details(product_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminecommerce/products/getProductById?product_id=' + product_id);
  }

  getallnotification(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/getallnotification');
  }
  //coupan
  coupan_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/coupan_list');
  }
  login_history(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/login_history');
  }
  customer_login_history(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/customer_login_history');
  }
  delete_coupan(coupan_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/delete_coupan?coupan_id=' + coupan_id);
  }

  edit_coupan_details(coupan_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/edit_coupan_details?coupan_id=' + coupan_id);
  }

  add_coupan(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_coupan', user);
  }

  update_coupan(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/update_coupan', user);
  }


  ///NEw api
  add_engineer(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_engineer', user);
  }

  update_engineer(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/updated_engineer', user);
  }

  address_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/address_list');
  }

  engineer_list(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/engineer_list');
  }

  assign_engineer(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/assign_engineer', user);
  }

  assign_engineer_list(engineer_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/assign_engineer_list?engineer_id=' + engineer_id);
  }

  seacrh_customer(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/seacrh_customer', user);
  }


  search_customer_details(mobile: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/search_customer_details?customer_mobile_number=' + mobile);
  }


  add_machinestepform(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_machinestepform', user);
  }

  customer_for_complain(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/customer_for_complain', user);
  }






  job_work_report(search_date: any): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/job_work_report/' + search_date);
  }

  add_job_work_note(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_job_work_note', user);
  }
  add_job_work(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_job_work', data);
  }


  customer_report(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/customer_report');
  }


  estimate_report(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/estimate_report');
  }

  in_deposit_report(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/in_deposit_report');
  }

  part_report(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.baseUrl + 'auth/adminsystem/part_report');
  }








  all_job_work_report(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/all_job_work_report');
  }


  partproduct_detailsbyid(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/part_product_detailsbyid?id=' + id);
  }
  get_job_work(job_work_id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/adminsystem/get_job_work?job_work_id=' + job_work_id);
  }

  part_product_list(id: number, customer_id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/part_product_list?id=' + id + '&customer_id=' + customer_id);
  }

  /*
  servicelist_bycustomer(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/servicelist_bycustomer?id=' + id);
  }

  */
  edit_addressbyid(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/edit_addressbyid?id=' + id);
  }
  delete_address(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/delete_address?id=' + id);
  }

  update_address(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/update_address', user);
  }
  delete_part_product(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/delete_part_product?id=' + id);
  }
  machine_bycustomer(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/machine_bycustomer?id=' + id);
  }
  address_bycustomer(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/address_bycustomer?id=' + id);
  }

  update_partproduct(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/productUpdate', user);
  }

  delete_machine(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/delete_machine?id=' + id);
  }

  edit_machine_byid(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/adminsystem/edit_machine_byid?id=' + id);
  }
  update_machine(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/update_machine', user);
  }

  add_part_product(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_part_product', user);
  }
  add_customer(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_customer', user);
  }

  update_customer(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'auth/adminsystem/update_customer', data);
  }

  


  add_address(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_address', user);
  }


  /*

  add_service(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_service', user);
  }

  */
  add_machine(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/adminsystem/add_machine', user);
  }


  ////





  alltransaction(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/transactions');
  }

  transactions_deposits(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/transactions_deposits');
  }


  transactions_widthdraws(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/transactions_widthdraws');
  }



  changepassword(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/changepassword', user);
  }



  send_payment(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/system/send_payment', user);
  }
  withdraw_payment(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/system/withdraw_payment', user);
  }
  addcurrency(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/system/addcurrency', user);
  }
  currencylist(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/currencylist');
  }
  kyc_user_transaction(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/kyc_user_transaction?id=' + id);
  }
  suspended_user(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/suspended_user');
  }
  suspended_customer(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/suspended_customer');
  }
  booking_list(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/guardbookinglist?id=' + id);
  }
  upcoming_booking_list_byid(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/upcomiguardbookinglist?id=' + id);
  }
  past_booking_list_byid(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/pastguardbookinglist?id=' + id);
  }
  customertotalbooking(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/customertotalbooking?id=' + id);
  }

  guardtotalbooking(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/guardtotalbooking?id=' + id);
  }

  customertotalbookingamount(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/customertotalbookingamount?id=' + id);
  }
  guardtotalbookingamount(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/guardtotalbookingamount?id=' + id);
  }

  totalcancelbooking(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/totalcancelbooking?id=' + id);
  }




  booking_details(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/guardbookingdetails?id=' + id);
  }

  transactionbyid(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/transactionbyid?id=' + id);
  }

  all_booking_list(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/bookinglist');
  }
  past_booking_list(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/allpastguardbookinglist');
  }
  customer_list(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/allcustomerlist');
  }
  allcancelbookinglist(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/allcancelbookinglist');
  }
  allrefundbookinglist(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/allrefundbookinglist');
  }
  upcoming_booking_list(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/allupcomiguardbookinglist');
  }

  kyc_user_details(id: number): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/kyc_user_details?id=' + id);
  }

  rate(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/system/rate?id=' + id);
  }

  payment_user(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/system/payment_user', user);
  }

  delete_currency(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/system/currencydelete?id=' + id);
  }

  delete_order(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'deleteorder?id=' + id);
  }
  addpaircurrency(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/system/addpaircurrency', user);
  }
  currencypairlist(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/system/currencypairlist');
  }


  delete_paircurrency(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/system/currencypairdelete?id=' + id);
  }
  postupdatemembership(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/postupdatemembership', data);
  }

  addplan(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/system/add_plan', user);
  }

  receive_payment(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/system/receive_payment', user);
  }



  getuserById(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/user');
  }


  profile_enable(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/enableg2f');
  }


  authcode(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/enableg2f', user);
  }

  get_client_ip(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/get_client_ip');
  }
  balance(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'auth/system/Balance');
  }

  updateProfile(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/postprofile', user);
  }

  updatedocument(document: Document): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/postkycnew', document);
  }


  getUsers(type: any): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + 'auth/system/users?type=' + type);
  }
  totallist(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + 'auth/system/totallist');
  }

  getKYCUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + 'auth/system/kyc_users');
  }


  getNonKYCUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + 'auth/system/non_kyc_users');
  }


  getDeleteUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + 'auth/system/delete_user_account_request');
  }


  getmembership(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + 'auth/system/membership');
  }

  getlogo(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.baseUrl + 'getlogo');
  }




  postlogo(data: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'auth/' + 'postlogo', data);
  }



  changeStatus(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/' + 'changeStatus?id=' + id);

  }

  deleteaccountstatus(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/' + 'deleteaccount?id=' + id);

  }


  deleteplan(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/' + 'deleteplan?id=' + id);

  }

  accountStatus(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/' + 'accountStatus?id=' + id);

  }


  notificationfundStatus(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/' + 'notificationfundStatus');

  }


  //exchange

  book_order(user: User, type: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'exchange/book_order/' + type, user);
  }
  buyorder_list(c1: any, c2: any, buy: any): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'exchange/orderbookings/' + buy + '/' + c1 + '/' + c2);
  }
  sellorder_list(c1: any, c2: any, sell: any): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'exchange/orderbookings/' + sell + '/' + c1 + '/' + c2);
  }
  tradehistory(c1: any, c2: any): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'exchange/allorderhistory' + '/' + c1 + '/' + c2);
  }
  completedorderhistory(c1: any, c2: any, completed: any): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'orderhistory1/' + completed + '/' + c1 + '/' + c2);
  }
  pendingorderhistory(c1: any, c2: any, pending: any): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'orderhistory1/' + pending + '/' + c1 + '/' + c2);
  }
  balancehistory(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'auth/balance');
  }
  ticker(): Observable<Array<Transaction>> {
    return this.http.get<Array<Transaction>>(this.baseUrl + 'exchange/tickers');
  }

  pairrate(c1: any, c2: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'exchange/rate/' + c1 + '/' + c2);
  }




  // exchange
  getplan(id: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/getplan?id=' + id);

  }



  changelogin(id: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/admin/changelogin?id=' + id);

  }

  deleteg2f(email: any): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/admin/deleteg2f?email=' + email);

  }
  reset_api_key(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'auth/reset_api_key');

  }

  networkfee(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'v1/networkfee');

  }
}
