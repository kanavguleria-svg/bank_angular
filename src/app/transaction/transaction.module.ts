import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrxnDashboardComponent } from './trxn-dashboard/trxn-dashboard.component';
import { DataTablesModule } from 'angular-datatables';
import { CreditAndCheckModule } from '../credit-and-check/credit-and-check.module';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';
import { AppRoutingModule } from '../app-routing.module';
import { NavFooterModule } from '../nav-footer/nav-footer.module';



@NgModule({
  declarations: [
    MakeTransactionComponent,
    TrxnDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    AppRoutingModule,
    NavFooterModule,
    LovedeepModuleModule
  ],
  exports: [
    MakeTransactionComponent,
    TrxnDashboardComponent
  ]
})
export class TransactionModule { }
