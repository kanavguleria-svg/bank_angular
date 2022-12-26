import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserUpdationComponent } from './user-updation/user-updation.component';
import { FormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { CreditAndCheckModule } from '../credit-and-check/credit-and-check.module';





@NgModule({
  declarations: [UserRegistrationComponent, UserUpdationComponent],
  imports: [
    CommonModule,FormsModule
  ],
  providers:[],
  exports:[UserRegistrationComponent,UserUpdationComponent]
})

export class UserModule { }
