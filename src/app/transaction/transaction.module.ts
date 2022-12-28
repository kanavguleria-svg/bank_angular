import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TrxnDashboardComponent } from './trxn-dashboard/trxn-dashboard.component';
import { DataTablesModule } from 'angular-datatables';



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
    DataTablesModule
  ],
  exports: [
    MakeTransactionComponent,
    TrxnDashboardComponent
  ]
})
export class TransactionModule { }