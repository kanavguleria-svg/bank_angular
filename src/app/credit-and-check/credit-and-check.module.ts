import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CheckbookComponent } from './checkbook/checkbook.component';
import { FormsModule } from '@angular/forms';
import { CreditCardService } from './credit-card/credit-card.service';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';

import { UserModule } from '../User/user.module';

import { CrouselEmptyComponent } from './crousel-empty/crousel-empty.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [CreditCardComponent,CheckbookComponent,CrouselEmptyComponent],
  imports: [
    CommonModule,FormsModule,LovedeepModuleModule,UserModule,AppRoutingModule
  ],
  providers:[CreditCardService],
  exports: [CreditCardComponent,CheckbookComponent,CrouselEmptyComponent],
})
export class CreditAndCheckModule { }
