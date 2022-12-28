import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactQueryComponent } from './lovedeep-module/components/query/contact-query/contact-query.component';
import { LandingComponent } from './lovedeep-module/pages/landing/landing.component';
import { LoginComponent } from './lovedeep-module/pages/login/login.component';
import { UserDashboardComponent } from './lovedeep-module/pages/user-dashboard/user-dashboard.component';

import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';
import { CheckbookComponent } from './credit-and-check/checkbook/checkbook.component';
import { CreditCardComponent } from './credit-and-check/credit-card/credit-card.component';


import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { MakeTransactionComponent } from './transaction/make-transaction/make-transaction.component';
import { TrxnDashboardComponent } from './transaction/trxn-dashboard/trxn-dashboard.component';
import { LoanReqComponent } from './loan/loan-req/loan-req.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactQueryComponent },
  {
    path: 'customerdashboard',
    component: UserDashboardComponent,
    canActivate: [AuthActivateRouteGuard],
  },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'checkbR', component: CheckbookComponent },
  { path: 'creditR', component: CreditCardComponent },
  { path: '', component: LandingComponent },
  {
    path: 'payment', 
    component: MakeTransactionComponent
  },
  {
    path: 'transaction', 
    component: TrxnDashboardComponent
  },
  {
    path: 'loanreq',
    component: LoanReqComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
