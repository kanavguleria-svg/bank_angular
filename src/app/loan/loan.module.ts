import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanReqComponent } from './loan-req/loan-req.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LoanReqComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  exports: [
    LoanReqComponent
  ]
})
export class LoanModule { }
