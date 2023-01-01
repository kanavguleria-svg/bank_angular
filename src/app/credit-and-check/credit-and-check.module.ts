import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CheckbookComponent } from './checkbook/checkbook.component';
import { FormsModule } from '@angular/forms';
import { CreditCardService } from './credit-card.service';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';

import { UserModule } from '../User/user.module';

import { CrouselEmptyComponent } from './crousel-empty/crousel-empty.component';
import { AppRoutingModule } from '../app-routing.module';
import { CreditCardAllComponent } from './credit-card-all/credit-card-all.component';
import { CheckBookServiceService } from './check-book-service.service';
import { CheckbookAllComponent } from './checkbook-all/checkbook-all.component';
import { OffersAmdinComponent } from './offers-amdin/offers-amdin.component';
import { OfferAllComponent } from './offer-all/offer-all.component';

import { DataTablesModule } from 'angular-datatables';
import { TransactionModule } from '../transaction/transaction.module';
import { NavFooterModule } from '../nav-footer/nav-footer.module';



@NgModule({
  declarations: [CreditCardComponent,CheckbookComponent,CrouselEmptyComponent, CreditCardAllComponent, CheckbookAllComponent, OffersAmdinComponent, OfferAllComponent],
  imports: [
    CommonModule,FormsModule,LovedeepModuleModule,UserModule,AppRoutingModule,TransactionModule, DataTablesModule,NavFooterModule,
  ],
  providers:[CreditCardService,CheckBookServiceService],
  exports: [CreditCardComponent,CheckbookComponent,CrouselEmptyComponent,OffersAmdinComponent,CreditCardAllComponent],
})
export class CreditAndCheckModule { }
