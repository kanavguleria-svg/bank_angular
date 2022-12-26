import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactQueryComponent } from './lovedeep-module/components/query/contact-query/contact-query.component';
import { LandingComponent } from './lovedeep-module/pages/landing/landing.component';
import { LoginComponent } from './lovedeep-module/pages/login/login.component';
import { UserDashboardComponent } from './lovedeep-module/pages/user-dashboard/user-dashboard.component';

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
