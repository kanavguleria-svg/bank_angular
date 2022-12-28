import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserUpdationComponent } from './user-updation/user-updation.component';
import { FormsModule } from '@angular/forms';
import { CreditAndCheckModule } from '../credit-and-check/credit-and-check.module';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';



@NgModule({
  declarations: [UserRegistrationComponent, UserUpdationComponent],
  imports: [
    CommonModule,FormsModule,LovedeepModuleModule
  ],
  providers:[],
  exports:[UserRegistrationComponent,UserUpdationComponent]
})

export class UserModule { }
