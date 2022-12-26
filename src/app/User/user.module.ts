import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserUpdationComponent } from './user-updation/user-updation.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';

import { LandingComponent } from '../pages/landing/landing.component';
import { LandingNavComponent } from '../layout/landing-nav/landing-nav.component';
import { CreditCardComponent } from '../credit-and-check/credit-card/credit-card.component';
import { CreditAndCheckModule } from '../credit-and-check/credit-and-check.module';




@NgModule({
  declarations: [UserRegistrationComponent, UserUpdationComponent],
  imports: [
    CommonModule,FormsModule,CreditAndCheckModule
  ],
  providers:[],
  exports:[UserRegistrationComponent,UserUpdationComponent]
})

export class UserModule { }
