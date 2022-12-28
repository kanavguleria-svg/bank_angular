
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoanModule } from './loan/loan.module';
import { TransactionModule } from './transaction/transaction.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CreditAndCheckModule } from './credit-and-check/credit-and-check.module';
import { UserModule } from './User/user.module';
import { AddPayeeComponent } from './Payee/add-payee/add-payee.component';
import { UpdatePayeeComponent } from './Payee/update-payee/update-payee.component';
import { LovedeepModuleModule } from './lovedeep-module/lovedeep-module.module';

@NgModule({
  declarations: [
    AppComponent,
    AddPayeeComponent,
    UpdatePayeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,
    UserModule,
    CreditAndCheckModule,LovedeepModuleModule,
    LoanModule,
    TransactionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],}
)
export class AppModule {}
