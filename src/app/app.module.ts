
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './User/user.module';
import { AddPayeeComponent } from './Payee/add-payee/add-payee.component';
import { UpdatePayeeComponent } from './Payee/update-payee/update-payee.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CheckbookComponent } from './checkbook/checkbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPayeeComponent,
    UpdatePayeeComponent,
    AppComponent,
    CreditCardComponent,
    CheckbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UserModule,HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
