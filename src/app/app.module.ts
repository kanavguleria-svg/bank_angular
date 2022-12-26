
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    UpdatePayeeComponent
  ],
  providers: [],
  imports: [
    BrowserModule,
    AppRoutingModule,UserModule,FormsModule,HttpClientModule,CreditAndCheckModule,LovedeepModuleModule
  ],
  bootstrap: [AppComponent],}
)
export class AppModule {}
