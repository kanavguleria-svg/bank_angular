import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingNavComponent } from './layout/landing-nav/landing-nav.component';
import { CrouselComponent } from './components/crousel/crousel.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactQueryComponent } from './components/query/contact-query/contact-query.component';
import { UserQueryComponent } from './components/query/user-query/user-query.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserOffersComponent } from './components/user-offers/user-offers.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { UserNavComponent } from './layout/user-nav/user-nav.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserdashhomeComponent } from './components/userdashhome/userdashhome.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AdminsidenavComponent } from './components/adminsidenav/adminsidenav.component';
import { PayeeModule } from '../Payee/payee.module';
import { AdminqueryComponent } from './components/adminquery/adminquery.component';
import { AllcustomersComponent } from './components/allcustomers/allcustomers.component';
import { UserModule } from '../User/user.module';
import { NavFooterModule } from '../nav-footer/nav-footer.module';
import { UserrequestsComponent } from './components/userrequests/userrequests.component';
import { ShowuseroffersComponent } from './components/showuseroffers/showuseroffers.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    LandingComponent,
    LandingNavComponent,
    CrouselComponent,
    FooterComponent,
    ContactQueryComponent,
    UserQueryComponent,
    UserOffersComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserNavComponent,
    UserDashboardComponent,
    LogoutComponent,
    SidenavComponent,
    UserdashhomeComponent,
    AccountDetailsComponent,
    AdminsidenavComponent,
    AdminqueryComponent,
    AllcustomersComponent,
    UserrequestsComponent,
    ShowuseroffersComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    PayeeModule,
    UserModule,
    NavFooterModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  providers: [],
  exports: [
    LandingComponent,
    LandingNavComponent,
    CrouselComponent,
    FooterComponent,
    ContactQueryComponent,
    UserQueryComponent,
    UserOffersComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserNavComponent,
    SidenavComponent,
    AdminsidenavComponent,
   
  ],
})
export class LovedeepModuleModule {}
