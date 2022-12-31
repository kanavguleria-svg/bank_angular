import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-mainnav',
  templateUrl: './mainnav.component.html',
  styleUrls: ['./mainnav.component.css']
})
export class MainnavComponent implements OnInit {
  showDropDown = false;
  customer = new Customer();
  link:string="/login";
  linkCredit:string="/login";
  linkCheque:string="/login";
  linkLoan:string="/login";
  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      if(this.customer.authStatus=="AUTH"){
        this.link="/payment"
        this.linkCheque="/checkbR"
        this.linkCredit="/creditR"
        this.linkLoan="/loanreq"
      }
      }
  }

  showDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }
}
