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
  link: string = '/login';
  linkCredit: string = '/login';
  linkCheque: string = '/login';
  linkLoan: string = '/login';
  linkdash: string = '/customerdashboard';

  constructor() {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      if (this.customer.authStatus == 'AUTH') {
        this.link = '/payment';
        this.linkCheque = '/checkbR';
        this.linkCredit = '/creditR';
        this.linkLoan = '/loanreq';
      }
      if (this.customer.role == 'ROLE_ADMIN') {
        this.linkdash = '/admindashboard';
      }
    }
  }

  showDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }
}
