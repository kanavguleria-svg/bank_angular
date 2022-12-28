import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TransactionDetails } from '../trxn';
import { TrxnService } from '../trxn.service';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {

  transferForm: FormGroup;
  loading = false;
  submitted = false;
  trxndetails: TransactionDetails;
  message: string = '';
  flag: boolean= false;

  customphacc="Account number : \nAccount Balance : ";

  trxndes: string[] = [
    'Bills',
    'Shopping',
    'Education fee',
    'Loan repayment',
  ]

  tr_dt: any=new Date();
  transaction_dt: string;
  
  constructor(private service: TrxnService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.transaction_dt = "Date : "+this.tr_dt.getDate()+"-"+this.tr_dt.getMonth()+"-"+this.tr_dt.getFullYear();
    this.trxndetails = new TransactionDetails();
    this.transferForm = new FormGroup({
      account_num_reciever: new FormControl(this.trxndetails.account_num_reciever, [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12)
      ]),
      transaction_amt: new FormControl(this.trxndetails.transaction_amt, [
        Validators.required
      ]),
      trxnDescription: new FormControl(this.trxndetails.trxnDescription, [
      ]),
      trxnDescriptionCustom: new FormControl(this.trxndetails.trxnDescription, [ ]),
    });
  
  }
  
  get account_num_reciever() { return this.transferForm.get('account_num_reciever'); }

  get transaction_amt() { return this.transferForm.get('transaction_amt'); }

  get trxnDescription() { return this.transferForm.get('trxnDescription'); }

  get trxnDescriptionCustom() { return this.transferForm.get('trxnDescriptionCustom'); }
  
  get fval() { return this.transferForm.controls; }

  // maketrxn() {
  //   console.log(this.trxndetails);
  //   this.service.maketrxn(this.trxndetails, 0).subscribe(data => {
  //     this.message = data;
  //     this.trxndetails = new TransactionDetails();
  //   }, error => {
  //     console.log(error);
  //   }
  //   )
  // }
  transfer() {
    this.submitted = true;
    this.trxndetails.account_num_reciever =  this.transferForm.get('account_num_reciever').value;
    this.trxndetails.account_num_sender = 0;
    this.trxndetails.transaction_amt = this.transferForm.get('transaction_amt').value;
    this.trxndetails.trxnDescription = this.transferForm.get('trxnDescription').value;
    if (this.trxndetails.trxnDescription == null || this.trxndetails.trxnDescription == undefined || this.trxndetails.trxnDescription =="transaction"){
      this.trxndetails.trxnDescription = this.transferForm.get('trxnDescriptionCustom').value;
    }
    if (this.transferForm.invalid) {
      return;
    }
    this.loading = true;
    try {
      this.service.maketrxn(this.trxndetails, 0).subscribe(data => {  
          this.loading = false;
          this.message = data;
          if (data) {
            Swal.fire({
              icon: 'success',
              title: 'Transaction successful',
              text: data.responseMessage
            })
          }
          else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: data.responseMessage,
            })
          }
        }
      );
    } catch {
      this.loading = false;
    }
  }

}