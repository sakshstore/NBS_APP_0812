import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './authentication/login/login.component';


import { AuthGuard } from './authentication/guards/auth.guard';



import { ListUserComponent } from "./component/wallet/user/list-user/list-user.component";
import { TransactionComponent } from './component/wallet/transaction/transaction.component';
import { WithdrawComponent } from './component/wallet/withdraw/withdraw.component';
import { DepositComponent } from './component/wallet/deposit/deposit.component';
import { UserProfileComponent } from './component/wallet/user-profile/user-profile.component';
import { ChangePasswordComponent } from './component/wallet/change-password/change-password.component';
import { GeneralSettingComponent } from './component/wallet/general-setting/general-setting.component';

import { BankAccountComponent } from './component/wallet/bank-account/bank-account.component';
import { PaymentFormComponent } from './component/wallet/payment-form/payment-form.component';


import { DashboardComponent } from './component/wallet/dashboard/dashboard.component';
import { AdminProfileComponent } from './component/wallet/admin-profile/admin-profile.component';

import { DeleteUserAccountRequestComponent } from './component/wallet/user/delete-user-account-request/delete-user-account-request.component';

import { UserDashboardComponent } from './component/wallet/user-dashboard/user-dashboard.component';


import { ConfirmPaymentComponent } from './component/wallet/confirm-payment/confirm-payment.component';
import { UserDepositAddressComponent } from './component/wallet/user-deposit-address/user-deposit-address.component';
import { UserDepositComponent } from './component/wallet/user-deposit/user-deposit.component';
import { KycUsersComponent } from './component/wallet/user/kyc-users/kyc-users.component';
import { NonKycUsersComponent } from './component/wallet/user/non-kyc-users/non-kyc-users.component';

import { UserWithdrawsComponent } from './component/wallet/user-withdraws/user-withdraws.component';
import { UserDetailsComponent } from './component/wallet/user-details/user-details.component';

import { AllCustomerComponent } from './component/wallet/customer/all-customer/all-customer.component';
import { AllBookingComponent } from './component/wallet/booking/all-booking/all-booking.component';
import { UpcomingBookingComponent } from './component/wallet/booking/upcoming-booking/upcoming-booking.component';
import { PastBookingComponent } from './component/wallet/booking/past-booking/past-booking.component';
import { CancelledBookingComponent } from './component/wallet/booking/cancelled-booking/cancelled-booking.component';
import { RefundRequestComponent } from './component/wallet/booking/refund-request/refund-request.component';
import { CustomerDetailsComponent } from './component/wallet/customer/customer-details/customer-details.component';
import { SuspendedUserComponent } from './component/wallet/user/suspended-user/suspended-user.component';
import { SuspendedCustomerComponent } from './component/wallet/customer/suspended-customer/suspended-customer.component';
import { BookingDetailsComponent } from './component/wallet/booking/booking-details/booking-details.component';
import { UserlistComponent } from './component/wallet/user/userlist/userlist.component';
import { TicketListComponent } from './component/wallet/ticket-list/ticket-list.component';
import { TicketMessageDetailsComponent } from './component/wallet/ticket-message-details/ticket-message-details.component';
import { BottomSheetOverviewExampleSheetComponent } from './component/wallet/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import { SearchCustomerComponent } from './component/wallet/search-customer/search-customer.component';
import { AddCustomerComponent } from './component/wallet/add-customer/add-customer.component';
import { AddAddressComponent } from './component/wallet/add-address/add-address.component';
import { AddMachineComponent } from './component/wallet/add-machine/add-machine.component';
import { AddServiceProblemComponent } from './component/wallet/add-service-problem/add-service-problem.component';
import { ReviewProblemComponent } from './component/wallet/review-problem/review-problem.component';
import { MultistepFormComponent } from './component/wallet/multistep-form/multistep-form.component';
import { SearchCustomerForComplainComponent } from './component/wallet/search-customer-for-complain/search-customer-for-complain.component';


import { CustomerReportComponent } from './component/report/customer-report/customer-report.component';
import { PartReportComponent } from './component/report/part-report/part-report.component';
import { EstimateReportComponent } from './component/report/estimate-report/estimate-report.component';
import { InDepositReportComponent } from './component/report/in-deposit-report/in-deposit-report.component';

import { JobWorkReportComponent } from './component/report/job-work-report/job-work-report.component';
import { EmployeeWorkSummeryComponent } from './component/report/employee-work-summery/employee-work-summery.component';

import { EngineersComponent } from './component/wallet/engineers/engineers.component';
import { EngineerComponent } from './component/wallet/engineer/engineer.component';
import { EngineerJobWorkListComponent } from './component/wallet/engineer-job-work-list/engineer-job-work-list.component';
import { JobListComponent } from './component/report/job-list/job-list.component';

import { AddProductComponent } from './component/ecommerce/add-product/add-product.component';
import { ProductListComponent } from './component/ecommerce/product-list/product-list.component';
import { CategoryListComponent } from './component/ecommerce/category-list/category-list.component';

import { BrandListComponent } from './component/ecommerce/brand-list/brand-list.component';
import { SubcategoryComponent } from './component/ecommerce/subcategory/subcategory.component';
import { AddJobWorkComponent } from './component/wallet/add-job-work/add-job-work.component';
import { EditProductComponent } from './component/ecommerce/edit-product/edit-product.component';

import { EditMachineComponent } from './component/wallet/edit-machine/edit-machine.component';
import { CoupanListComponent } from './component/ecommerce/coupan-list/coupan-list.component';
import { AdminLoginHistoryComponent } from './component/wallet/admin-login-history/admin-login-history.component';
import { CustomerLoginHistoryComponent } from './component/wallet/customer-login-history/customer-login-history.component';
import { NotificationComponent } from './component/wallet/notification/notification.component';
import { DropzoneComponent } from './component/wallet/dropzone/dropzone.component';
import { OrderListComponent } from './component/order/order-list/order-list.component';
import { AddOrderComponent } from './component/order/add-order/add-order.component';
import { EditOrderComponent } from './component/order/edit-order/edit-order.component';
import { OrderHistoryComponent } from './component/order/order-history/order-history.component';
import { OrderDetailsComponent } from './component/order/order-details/order-details.component';


import { SendtoComponent } from './component/sendto/sendto.component';


import { JobWorkComponent } from './component/nggrid/job-work/job-work.component';


import { AddOrderForNewCustomerComponent } from './component/order/add-order-for-new-customer/add-order-for-new-customer.component';
import { ProductsImportComponent } from './component/ecommerce/products-import/products-import.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', component: LoginComponent },


  { path: 'sendto/:url', component: SendtoComponent },



  { path: 'report/job-list/:date', component: JobListComponent, canActivate: [AuthGuard] },



  { path: 'report/employee-work-summery', component: EmployeeWorkSummeryComponent, canActivate: [AuthGuard] },



  { path: 'report/job-work/:date', component: JobWorkReportComponent, canActivate: [AuthGuard] },


  { path: 'report/job-work/:query/:engineer_id', component: JobWorkReportComponent, canActivate: [AuthGuard] },



  { path: 'report/grid/jobwork', component: JobWorkComponent, canActivate: [AuthGuard] },

  { path: 'report/in-deposit', component: InDepositReportComponent, canActivate: [AuthGuard] },
  { path: 'report/estimate', component: EstimateReportComponent, canActivate: [AuthGuard] },
  { path: 'report/part-report', component: PartReportComponent, canActivate: [AuthGuard] },
  { path: 'report/customer-report', component: CustomerReportComponent, canActivate: [AuthGuard] },




  { path: 'user/list-user/:type', component: ListUserComponent, canActivate: [AuthGuard] },
  { path: 'transaction', component: TransactionComponent, canActivate: [AuthGuard] },
  { path: 'deposit', component: DepositComponent, canActivate: [AuthGuard] },
  { path: 'withdraw', component: WithdrawComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
  { path: 'general-setting', component: GeneralSettingComponent, canActivate: [AuthGuard] },

  { path: 'bank-account', component: BankAccountComponent, canActivate: [AuthGuard] },
  { path: 'payment-form', component: PaymentFormComponent, canActivate: [AuthGuard] },

  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin-profile', component: AdminProfileComponent, canActivate: [AuthGuard] },

  { path: 'user/delete-user-account-request', component: DeleteUserAccountRequestComponent, canActivate: [AuthGuard] },

  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'user/non-kyc-users', component: NonKycUsersComponent, canActivate: [AuthGuard] },
  { path: 'user/kyc-users', component: KycUsersComponent, canActivate: [AuthGuard] },
  { path: 'home', component: UserDashboardComponent, canActivate: [AuthGuard] },

  { path: 'confirm-payment', component: ConfirmPaymentComponent, canActivate: [AuthGuard] },
  { path: 'user-deposit', component: UserDepositComponent, canActivate: [AuthGuard] },
  { path: 'user-deposit-address', component: UserDepositAddressComponent, canActivate: [AuthGuard] },
  { path: 'user-withdraws', component: UserWithdrawsComponent, canActivate: [AuthGuard] },
  { path: 'user-details/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },

  { path: 'customer/all-customer', component: AllCustomerComponent, canActivate: [AuthGuard] },
  { path: 'booking/all-booking', component: AllBookingComponent, canActivate: [AuthGuard] },
  { path: 'booking/upcoming-booking', component: UpcomingBookingComponent, canActivate: [AuthGuard] },
  { path: 'booking/past-booking', component: PastBookingComponent, canActivate: [AuthGuard] },
  { path: 'booking/cancelled-booking', component: CancelledBookingComponent, canActivate: [AuthGuard] },
  { path: 'booking/refund-request', component: RefundRequestComponent, canActivate: [AuthGuard] },
  { path: 'customer/customer-details/:id', component: CustomerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'customer/suspended-customer', component: SuspendedCustomerComponent, canActivate: [AuthGuard] },
  { path: 'user/suspended-user', component: SuspendedUserComponent, canActivate: [AuthGuard] },
  { path: 'booking/booking-details/:id', component: BookingDetailsComponent, canActivate: [AuthGuard] },

  { path: 'user/userlist/:type', component: UserlistComponent, canActivate: [AuthGuard] },
  { path: 'ticket-list', component: TicketListComponent, canActivate: [AuthGuard] },
  { path: 'ticket-message-details/:id', component: TicketMessageDetailsComponent, canActivate: [AuthGuard] },
  { path: 'bottom-sheet-overview-example-sheet', component: BottomSheetOverviewExampleSheetComponent, canActivate: [AuthGuard] },
  { path: 'search-customer/:mobile', component: SearchCustomerComponent, canActivate: [AuthGuard] },


  { path: 'add-customer/:redirect', component: AddCustomerComponent, canActivate: [AuthGuard] },


  { path: 'add-customer', component: AddCustomerComponent, canActivate: [AuthGuard] },
  { path: 'add-address', component: AddAddressComponent, canActivate: [AuthGuard] },
  { path: 'add-machine', component: AddMachineComponent, canActivate: [AuthGuard] },
  { path: 'add-service-problem', component: AddServiceProblemComponent, canActivate: [AuthGuard] },
  { path: 'review-problem', component: ReviewProblemComponent, canActivate: [AuthGuard] },

  { path: 'multistep-form', component: MultistepFormComponent, canActivate: [AuthGuard] },


  { path: 'add-job-work-for-new-customer', component: MultistepFormComponent, canActivate: [AuthGuard] },

  { path: 'search-customer-for-complain', component: SearchCustomerForComplainComponent, canActivate: [AuthGuard] },

  { path: 'engineers', component: EngineersComponent, canActivate: [AuthGuard] },
  { path: 'engineer', component: EngineerComponent, canActivate: [AuthGuard] },
  { path: 'engineer-job-work-list/:engineer_id', component: EngineerJobWorkListComponent, canActivate: [AuthGuard] },






  

  { path: 'ecommerce/products-import', component: ProductsImportComponent, canActivate: [AuthGuard] },
  

  { path: 'ecommerce/add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'ecommerce/product-list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'ecommerce/category-list', component: CategoryListComponent, canActivate: [AuthGuard] },
  { path: 'order/order-list', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'ecommerce/brand-list', component: BrandListComponent, canActivate: [AuthGuard] },

  { path: 'ecommerce/subcategory', component: SubcategoryComponent, canActivate: [AuthGuard] },
  { path: 'add-job-work/:mobile', component: AddJobWorkComponent, canActivate: [AuthGuard] },


  { path: 'job_work/add/:step/:mobile', component: AddJobWorkComponent, canActivate: [AuthGuard] },


  { path: 'ecommerce/edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard] },

  { path: 'order/add-order', component: AddOrderComponent, canActivate: [AuthGuard] },

  { path: 'order/edit-order/:id', component: EditOrderComponent, canActivate: [AuthGuard] },
  { path: 'edit-machine', component: EditMachineComponent, canActivate: [AuthGuard] },
  { path: 'ecommerce/coupan-list', component: CoupanListComponent, canActivate: [AuthGuard] },

  { path: 'edit-machine', component: EditMachineComponent, canActivate: [AuthGuard] },
  { path: 'customer-login-history', component: CustomerLoginHistoryComponent, canActivate: [AuthGuard] },
  { path: 'admin-login-history', component: AdminLoginHistoryComponent, canActivate: [AuthGuard] },

  { path: 'notification', component: NotificationComponent, canActivate: [AuthGuard] },
  { path: 'dropzone', component: DropzoneComponent, canActivate: [AuthGuard] },
  { path: 'order/order-history/:date', component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: 'order/order-details/:order_id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
  { path: 'order/add-order-for-new-customer', component: AddOrderForNewCustomerComponent, canActivate: [AuthGuard] },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
