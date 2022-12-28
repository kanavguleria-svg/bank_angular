import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './lovedeep-module/components/logout/logout.component';
import { ContactQueryComponent } from './lovedeep-module/components/query/contact-query/contact-query.component';
import { LandingComponent } from './lovedeep-module/pages/landing/landing.component';
import { LoginComponent } from './lovedeep-module/pages/login/login.component';
import { UserDashboardComponent } from './lovedeep-module/pages/user-dashboard/user-dashboard.component';
import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';
import { CheckbookComponent } from './credit-and-check/checkbook/checkbook.component';
import { CreditCardComponent } from './credit-and-check/credit-card/credit-card.component';
import { UserQueryComponent } from './lovedeep-module/components/query/user-query/user-query.component';
import { AccountDetailsComponent } from './lovedeep-module/components/account-details/account-details.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { AdminDashboardComponent } from './lovedeep-module/pages/admin-dashboard/admin-dashboard.component';
import { AddPayeeComponent } from './Payee/add-payee/add-payee.component';
import { UserUpdationComponent } from './User/user-updation/user-updation.component';

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
  //landing Route
  { path: 'login', component: LoginComponent },

  { path: 'contact', component: ContactQueryComponent },

  {
    path: 'customerdashboard',
    component: UserDashboardComponent,
    canActivate: [AuthActivateRouteGuard],
  },

  //user Routes
  {path:'register',component:UserRegistrationComponent},
  {path:'updateUser',component:UserUpdationComponent},
 
  //payee Routes
  {path:'updatePayee',component:AddPayeeComponent},
  {path:'addPayee',component:AddPayeeComponent},

  {path:'checkbR',component:CheckbookComponent},

  {path:'creditR',component:CreditCardComponent},

  {
    path: 'logout',
    component: LogoutComponent,
  },
  { path: 'usercontact', component: UserQueryComponent },
  { path: 'accountdetails', component: AccountDetailsComponent },
  {
    path: 'admindashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthActivateRouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
