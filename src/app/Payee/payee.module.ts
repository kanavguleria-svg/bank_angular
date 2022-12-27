import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { UpdatePayeeComponent } from './update-payee/update-payee.component';



@NgModule({
  declarations: [AddPayeeComponent,UpdatePayeeComponent],
  imports: [
    CommonModule,FormsModule
  ],exports:[AddPayeeComponent,UpdatePayeeComponent],
})
export class PayeeModule { }
