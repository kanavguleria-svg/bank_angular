import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { UpdatePayeeComponent } from './update-payee/update-payee.component';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';
import { AllPayeeComponent } from './all-payee/all-payee.component';
import { DataTablesModule } from 'angular-datatables';
import { NavFooterModule } from '../nav-footer/nav-footer.module';



@NgModule({
  declarations: [AddPayeeComponent,UpdatePayeeComponent, AllPayeeComponent],
  imports: [
    CommonModule,FormsModule,DataTablesModule,NavFooterModule
  ],exports:[AddPayeeComponent,UpdatePayeeComponent,AllPayeeComponent],
})
export class PayeeModule { }
