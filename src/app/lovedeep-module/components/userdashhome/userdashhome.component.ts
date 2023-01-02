import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { TrxnService } from 'src/app/transaction/trxn.service';

@Component({
  selector: 'app-userdashhome',
  templateUrl: './userdashhome.component.html',
  styleUrls: ['./userdashhome.component.css'],
})
export class UserdashhomeComponent implements OnInit {
  customer = new Customer();
  accountBalance: number;
  constructor(private service: TrxnService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      this.accountBalance = this.customer['account_details'].account_balance;
    }
    this.service.getAccount(this.customer['customer_id']).subscribe(data => {
      this.accountBalance = data.account_balance;
    }, error => {
      console.log(error);
    }
    )
  }
}
