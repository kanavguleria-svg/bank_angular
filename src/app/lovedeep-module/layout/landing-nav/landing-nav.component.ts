import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css'],
})
export class LandingNavComponent implements OnInit {
  customer = new Customer();
  showDropDown = false;
  creditReq = '/login';
  loanreq = '/login';
  checkreq = '/login';
  pay = '/login';

  constructor() {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      this.creditReq = '/creditR';
      this.checkreq = '/checkbR';
      this.loanreq = '/loanreq';
      this.pay = '/payment';
    }
  }

  showDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }
}
