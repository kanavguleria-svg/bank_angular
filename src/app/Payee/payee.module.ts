import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { UpdatePayeeComponent } from './update-payee/update-payee.component';
import { LandingNavComponent } from '../lovedeep-module/layout/landing-nav/landing-nav.component';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';
import { AllPayeeComponent } from './all-payee/all-payee.component';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [AddPayeeComponent,UpdatePayeeComponent, AllPayeeComponent],
  imports: [
    CommonModule,FormsModule,DataTablesModule
  ],exports:[AddPayeeComponent,UpdatePayeeComponent,AllPayeeComponent],
})
export class PayeeModule { }
