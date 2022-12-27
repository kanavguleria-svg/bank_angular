import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingNavComponent } from './layout/landing-nav/landing-nav.component';
import { CrouselComponent } from './components/crousel/crousel.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactQueryComponent } from './components/query/contact-query/contact-query.component';
import { UserQueryComponent } from './components/query/user-query/user-query.component';
import { FormsModule } from '@angular/forms';
import { UserOffersComponent } from './components/user-offers/user-offers.component';
import { LoginComponent } from './pages/login/login.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { XhrInterceptor } from '../interceptors/app.request.interceptor';
import { AuthActivateRouteGuard } from '../routeguards/auth.routeguard';
import { AppRoutingModule } from '../app-routing.module';
import { UserNavComponent } from './layout/user-nav/user-nav.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserdashhomeComponent } from './components/userdashhome/userdashhome.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AdminsidenavComponent } from './components/adminsidenav/adminsidenav.component';

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
  ],
  imports: [
    CommonModule,
    FormsModule,AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true,
    },
    AuthActivateRouteGuard,
  ],
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
  ],
})
export class LovedeepModuleModule {}
