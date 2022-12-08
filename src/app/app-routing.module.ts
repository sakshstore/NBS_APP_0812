import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IntroGuard } from './guards/intro.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';

import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canLoad: [IntroGuard, AutoLoginGuard] // Check if we should show the introduction or forward to inside
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then(m => m.IntroPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard] // Secure all child pages
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  { path: 'cart', component: CartComponent },


  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'ticket-history',
    loadChildren: () => import('./pages/ticket-history/ticket-history.module').then(m => m.TicketHistoryPageModule)
  },
  {
    path: 'add-machine',
    loadChildren: () => import('./pages/add-machine/add-machine.module').then(m => m.AddMachinePageModule)
  },
  {
    path: 'machineform',
    loadChildren: () => import('./pages/machineform/machineform.module').then(m => m.MachineformPageModule)
  },
  {
    path: 'complain-details',
    loadChildren: () => import('./pages/complain-details/complain-details.module').then(m => m.ComplainDetailsPageModule)
  },
  {
    path: 'supportmessage',
    loadChildren: () => import('./pages/supportmessage/supportmessage.module').then(m => m.SupportmessagePageModule)
  },
  {
    path: 'estimate-details',
    loadChildren: () => import('./pages/estimate-details/estimate-details.module').then(m => m.EstimateDetailsPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'address-list',
    loadChildren: () => import('./pages/address-list/address-list.module').then(m => m.AddressListPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'support-details',
    loadChildren: () => import('./pages/support-details/support-details.module').then(m => m.SupportDetailsPageModule)
  },
  {
    path: 'product-list/:query/:query_id',
    loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },

  {
    path: 'order-detail/:order_id',
    loadChildren: () => import('./pages/order/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },

  {
    path: 'order',
    loadChildren: () => import('./pages/order/order.module').then(m => m.OrderPageModule)
  },
  {
    path: 'basket/:id',
    loadChildren: () => import('./pages/basket/basket.module').then(m => m.BasketPageModule)
  },
  {
    path: 'checkout/:id',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },

  {
    path: 'payment/:case',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },


  {
    path: 'payment/order',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then(m => m.WishlistPageModule)
  },
  {
    path: 'category-product-list/:catId',
    loadChildren: () => import('./pages/category-product-list/category-product-list.module').then(m => m.CategoryProductListPageModule)
  },
  {
    path: 'subcategory',
    loadChildren: () => import('./pages/subcategory/subcategory.module').then(m => m.SubcategoryPageModule)
  },
  {
    path: 'brand-list',
    loadChildren: () => import('./pages/brand-list/brand-list.module').then(m => m.BrandListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
