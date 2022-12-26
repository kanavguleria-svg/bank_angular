import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserQueryComponent } from './components/query/user-query/user-query.component';
import { ContactQueryComponent } from './components/query/contact-query/contact-query.component';
import { UserOffersComponent } from './components/user-offers/user-offers.component';
import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
