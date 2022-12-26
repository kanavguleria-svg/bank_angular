import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckbookComponent } from './credit-and-check/checkbook/checkbook.component';
import { CreditCardComponent } from './credit-and-check/credit-card/credit-card.component';

import { LandingComponent } from './pages/landing/landing.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';

const routes: Routes = [
  {path:'register',component:UserRegistrationComponent},
  {path:'checkbR',component:CheckbookComponent},
  {path:'creditR',component:CreditCardComponent},
  {path:'',component:LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
