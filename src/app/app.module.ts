import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClientXsrfModule,
} from '@angular/common/http';
import { XhrInterceptor } from './interceptors/app.request.interceptor';
import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';
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
import { LovedeepModuleModule } from './lovedeep-module/lovedeep-module.module';
import { PayeeModule } from './Payee/payee.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    CreditAndCheckModule,
    LovedeepModuleModule,
    PayeeModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }), LoanModule,
    TransactionModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true,
    },
    AuthActivateRouteGuard,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
