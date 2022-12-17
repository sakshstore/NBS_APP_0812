import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownDirective } from './component/shared/naviagtion/dropdown.directive';
import { CollapseDirective } from './component/shared/naviagtion/collapse.directive';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './authentication/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { NaviagtionComponent } from './component/shared/naviagtion/naviagtion.component';
import { FooterComponent } from './component/shared/footer/footer.component';

import { JobService } from './component/job.service';
import { ListUserComponent } from './component/wallet/user/list-user/list-user.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { NgxSpinnerModule } from "ngx-spinner";

import { MatSnackBar } from '@angular/material/snack-bar';



import { TransactionComponent } from './component/wallet/transaction/transaction.component';
import { WithdrawComponent } from './component/wallet/withdraw/withdraw.component';
import { DepositComponent } from './component/wallet/deposit/deposit.component';
import { UserDepositComponent } from './component/wallet/user-deposit/user-deposit.component';
import { UserDepositAddressComponent } from './component/wallet/user-deposit-address/user-deposit-address.component';

import { NgxDropzoneModule } from 'ngx-dropzone';



import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
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

import { UserWithdrawsComponent } from './component/wallet/user-withdraws/user-withdraws.component';

import { NonKycUsersComponent } from './component/wallet/user/non-kyc-users/non-kyc-users.component';
import { KycUsersComponent } from './component/wallet/user/kyc-users/kyc-users.component';
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
import { EngineersComponent } from './component/wallet/engineers/engineers.component';
import { EngineerComponent } from './component/wallet/engineer/engineer.component';
import { EngineerJobWorkListComponent } from './component/wallet/engineer-job-work-list/engineer-job-work-list.component';
import { JobListComponent } from './component/report/job-list/job-list.component';
import { AddProductComponent } from './component/ecommerce/add-product/add-product.component';
import { ProductListComponent } from './component/ecommerce/product-list/product-list.component';
import { CategoryListComponent } from './component/ecommerce/category-list/category-list.component';
import { OrderListComponent } from './component/order/order-list/order-list.component';
import { BrandListComponent } from './component/ecommerce/brand-list/brand-list.component';
import { SubcategoryComponent } from './component/ecommerce/subcategory/subcategory.component';
import { AddJobWorkComponent } from './component/wallet/add-job-work/add-job-work.component';
import { EditProductComponent } from './component/ecommerce/edit-product/edit-product.component';
import { AddOrderComponent } from './component/order/add-order/add-order.component';
import { EditOrderComponent } from './component/order/edit-order/edit-order.component';
import { EditMachineComponent } from './component/wallet/edit-machine/edit-machine.component';
import { CoupanListComponent } from './component/ecommerce/coupan-list/coupan-list.component';
import { AdminLoginHistoryComponent } from './component/wallet/admin-login-history/admin-login-history.component';
import { CustomerLoginHistoryComponent } from './component/wallet/customer-login-history/customer-login-history.component';
import { NotificationComponent } from './component/wallet/notification/notification.component';
import { DropzoneComponent } from './component/wallet/dropzone/dropzone.component';

import { OrderHistoryComponent } from './component/order/order-history/order-history.component';
import { OrderDetailsComponent } from './component/order/order-details/order-details.component';
import { AddOrderForNewCustomerComponent } from './component/order/add-order-for-new-customer/add-order-for-new-customer.component';
import { SendtoComponent } from './component/sendto/sendto.component';


import { AgGridModule } from 'ag-grid-angular';
import { JobWorkComponent } from './component/nggrid/job-work/job-work.component';
import { EmployeeWorkSummeryComponent } from './component/report/employee-work-summery/employee-work-summery.component';
import { ProductsImportComponent } from './component/ecommerce/products-import/products-import.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NaviagtionComponent,
    DropdownDirective,
    CollapseDirective,
    FooterComponent,
    ListUserComponent,
    UserDepositComponent,
    UserDepositAddressComponent,
    OrderHistoryComponent,
    OrderDetailsComponent,
    DropzoneComponent,
    TransactionComponent,
    WithdrawComponent,
    DepositComponent,
    UserProfileComponent,
    ChangePasswordComponent,
    GeneralSettingComponent,

    BankAccountComponent,
    PaymentFormComponent,

    DashboardComponent,
    AdminProfileComponent,

    DeleteUserAccountRequestComponent,

    UserDashboardComponent,


    ConfirmPaymentComponent,
    NonKycUsersComponent,
    KycUsersComponent,

    UserWithdrawsComponent,

    UserDetailsComponent,

    AllCustomerComponent,

    AllBookingComponent,

    UpcomingBookingComponent,

    PastBookingComponent,

    CancelledBookingComponent,

    RefundRequestComponent,

    CustomerDetailsComponent,

    SuspendedUserComponent,

    SuspendedCustomerComponent,

    BookingDetailsComponent,

    UserlistComponent,

    TicketListComponent,

    TicketMessageDetailsComponent,

    BottomSheetOverviewExampleSheetComponent,

    SearchCustomerComponent,

    AddCustomerComponent,

    AddAddressComponent,

    AddMachineComponent,

    AddServiceProblemComponent,

    ReviewProblemComponent,

    MultistepFormComponent,

    SearchCustomerForComplainComponent,

    CustomerReportComponent,

    PartReportComponent,

    EstimateReportComponent,

    InDepositReportComponent,

    JobWorkReportComponent,


    EngineersComponent,


    EngineerComponent,


    EngineerJobWorkListComponent,


    JobListComponent,


    AddProductComponent,


    ProductListComponent,


    CategoryListComponent,


    OrderListComponent,


    BrandListComponent,


    SubcategoryComponent,


    AddJobWorkComponent,


    EditProductComponent,


    AddOrderComponent,


    EditOrderComponent,


    EditMachineComponent,


    CoupanListComponent,


    AdminLoginHistoryComponent,


    CustomerLoginHistoryComponent,


    NotificationComponent,


    AddOrderForNewCustomerComponent,


    SendtoComponent,


    JobWorkComponent,


    EmployeeWorkSummeryComponent,

    ProductsImportComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    CKEditorModule, NgbModule,
    NgxSpinnerModule, MatSliderModule, MatTableModule, NgxDropzoneModule,


    


    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,


    AgGridModule

  ],
  providers: [
    AuthService,
    JobService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
