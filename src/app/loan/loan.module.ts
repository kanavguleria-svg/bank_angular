import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanReqComponent } from './loan-req/loan-req.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavFooterModule } from '../nav-footer/nav-footer.module';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';
import { AdminLoanlistComponent } from './admin-loanlist/admin-loanlist.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
    declarations: [
        LoanReqComponent,
        AdminLoanlistComponent
    ],
    exports: [
        LoanReqComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        NavFooterModule,
        LovedeepModuleModule,
        DataTablesModule,
        ReactiveFormsModule
    ]
})
export class LoanModule { }
