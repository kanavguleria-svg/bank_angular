import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './User/user.module';
import { AddPayeeComponent } from './Payee/add-payee/add-payee.component';
import { UpdatePayeeComponent } from './Payee/update-payee/update-payee.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingNavComponent } from './layout/landing-nav/landing-nav.component';
import { CrouselComponent } from './components/crousel/crousel.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContactQueryComponent } from './components/query/contact-query/contact-query.component';
import { UserQueryComponent } from './components/query/user-query/user-query.component';
import { FormsModule } from '@angular/forms';
import { UserOffersComponent } from './components/user-offers/user-offers.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingNavComponent,
    CrouselComponent,
    FooterComponent,
    ContactQueryComponent,
    UserQueryComponent,
    UserOffersComponent,
    LoginComponent,
    AppComponent,
    AddPayeeComponent,
    UpdatePayeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
