import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { UpdatePayeeComponent } from './update-payee/update-payee.component';
import { LandingNavComponent } from '../lovedeep-module/layout/landing-nav/landing-nav.component';
import { LovedeepModuleModule } from '../lovedeep-module/lovedeep-module.module';



@NgModule({
  declarations: [AddPayeeComponent,UpdatePayeeComponent],
  imports: [
    CommonModule,FormsModule,LovedeepModuleModule
  ],exports:[AddPayeeComponent,UpdatePayeeComponent],
})
export class PayeeModule { }
