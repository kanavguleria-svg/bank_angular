import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import Swal from 'sweetalert2';
import { TrxnPayee } from '../payee';
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
  flag: boolean = false;
  customphacc: string;
  private customer_id: number;
  private customer_acc: number;
  private customer_bal: number;
  customer: Customer;
  trxnPayee: TrxnPayee[];

  trxndes: string[] = [
    'Bills',
    'Shopping',
    'Education fee',
    'Loan repayment',
  ]

  tr_dt: any = new Date();
  transaction_dt: string;

  constructor(private service: TrxnService, private formBuilder: FormBuilder) {
    if (sessionStorage.getItem('userdetails')) {
      console.log(JSON.parse(sessionStorage.getItem('userdetails')))
      this.customer_id = JSON.parse(sessionStorage.getItem('userdetails')).customer_id;
      this.customer = JSON.parse(sessionStorage.getItem('userdetails'))
      this.customer_acc = JSON.parse(sessionStorage.getItem('userdetails')).account_details.account_no;
      // this.customer_bal = JSON.parse(sessionStorage.getItem('userdetails')).account_details.account_balance;
    }

  }

  ngOnInit(): void {
    this.service.getAccount(this.customer_id).subscribe(data => {
      this.customer_bal = data.account_balance;
      this.customphacc = "Account number : " + this.customer_acc + "\nAccount Balance : " + this.customer_bal;
    }, error => {
      console.log(error);
    }
    )
    this.transaction_dt = "Date : " + this.tr_dt.getDate() + "-" + (parseInt(this.tr_dt.getMonth()) + 1) + "-" + this.tr_dt.getFullYear();
    this.getPayeeDetails();

    this.trxndetails = new TransactionDetails();

    this.transferForm = new FormGroup({
      account_num_reciever: new FormControl(this.trxndetails.account_num_reciever, [
        Validators.required,
        // Validators.minLength(8),
        // Validators.maxLength(8)
      ]),
      transaction_amt: new FormControl(this.trxndetails.transaction_amt, [Validators.required]),
      trxnDescription: new FormControl(this.trxndetails.trxnDescription, []),
      trxnDescriptionCustom: new FormControl(this.trxndetails.trxnDescription, []),
      payee: new FormControl(),
      userdet: new FormControl(),

    });

  }

  getPayeeDetails() {
    this.service.getPayee(this.customer_id).subscribe(data => {
      this.trxnPayee = data;
      console.log(data)
    }, error => {
      console.log(error);
    }
    )
  }

  setPayee(event: Event) {
    const payeectrl = this.transferForm.get('payee')
    const ctrl = this.transferForm.get('account_num_reciever');

    if (payeectrl.value === 'transaction') {
      ctrl.setValue(null);
      ctrl.enable();
    } else if (payeectrl.value != null) {
      ctrl.setValue(payeectrl.value);
      ctrl.disable();
    } else {
      ctrl.enable();
    }
  }

  transfer() {
    this.submitted = true;
    this.trxndetails.account_num_reciever = this.transferForm.get('account_num_reciever').value;
    this.trxndetails.account_num_sender = this.customer_acc;
    this.trxndetails.transaction_amt = this.transferForm.get('transaction_amt').value;
    this.trxndetails.trxnDescription = this.transferForm.get('trxnDescription').value;
    if (this.trxndetails.trxnDescription == null || this.trxndetails.trxnDescription == undefined || this.trxndetails.trxnDescription == "transaction") {
      this.trxndetails.trxnDescription = this.transferForm.get('trxnDescriptionCustom').value;
    }
    console.log(this.trxndetails);
    if (this.transferForm.invalid) {
      return;
    }
    this.loading = true;
    try {
      this.service.maketrxn(this.trxndetails, this.customer_id).subscribe(data => {
        this.loading = false;
        this.message = data;
        this.trxndetails = new TransactionDetails();
        if (data.slice(0, 6) === 'Saved!') {
          this.service.getAccount(this.customer_id).subscribe(data => {
            this.customer_bal = data.account_balance;
            this.customphacc = "Account number : " + this.customer_acc + "\nAccount Balance : " + this.customer_bal;
          }, error => {
            console.log(error);
          }
          )
          Swal.fire({
            icon: 'success',
            title: 'Transaction successful',
            text: data.slice(7,)
          })
         
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: data,
          })
        }
      }, error => {
        this.loading = false;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error
        })
      }
      );
    } catch {
      this.loading = false;
    }
  }

  get account_num_reciever() { return this.transferForm.get('account_num_reciever'); }

  get transaction_amt() { return this.transferForm.get('transaction_amt'); }

  get trxnDescription() { return this.transferForm.get('trxnDescription'); }

  get trxnDescriptionCustom() { return this.transferForm.get('trxnDescriptionCustom'); }

  get fval() { return this.transferForm.controls; }

}
