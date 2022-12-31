import { Component, OnInit } from '@angular/core';
import { CheckBook } from 'src/app/models/checkBook';
import { CreditCard } from 'src/app/models/CreditCard';
import { Customer } from 'src/app/models/customer.model';
import { UserService } from 'src/app/services/user.service';
import { LoanReq } from 'src/app/loan/loan-req';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  customer = new Customer();
  creditReq = new CreditCard();
  checkReq = new CheckBook();
  loanReq = new LoanReq();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      this.getUserCreditReq();
      this.getUserCheckReq();
      this.getUserloanReq();
    }
  }

  getUserCreditReq() {
    this.userService
      .getCreditReq(this.customer.customer_id)
      .subscribe((data) => {
        this.creditReq = data;
        console.log(data);
      });
  }
  getUserCheckReq() {
    this.userService
      .getCheckReq(this.customer.customer_id)
      .subscribe((data) => {
        this.checkReq = data;
        console.log(data);
      });
  }

  getUserloanReq() {
    this.userService.getLoanReq(this.customer.customer_id).subscribe((data) => {
      this.loanReq = data;
      console.log(data);
    });
  }
}
