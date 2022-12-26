import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CheckbookComponent } from './checkbook/checkbook.component';
import { FormsModule } from '@angular/forms';
import { CreditCardService } from './credit-card/credit-card.service';



@NgModule({
  declarations: [CreditCardComponent,CheckbookComponent],
  imports: [
    CommonModule,FormsModule
  ],
  providers:[CreditCardService],
  exports: [CreditCardComponent,CheckbookComponent],
})
export class CreditAndCheckModule { }
