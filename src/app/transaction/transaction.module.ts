import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakeTransactionComponent } from './make-transaction/make-transaction.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MakeTransactionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MakeTransactionComponent
  ]
})
export class TransactionModule { }
