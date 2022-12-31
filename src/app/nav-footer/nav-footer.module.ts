import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainfooterComponent } from './mainfooter/mainfooter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    MainfooterComponent,
    NavbarComponent,
    MainnavComponent,
    MainnavComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [MainfooterComponent, NavbarComponent, MainnavComponent],
})
export class NavFooterModule {}
