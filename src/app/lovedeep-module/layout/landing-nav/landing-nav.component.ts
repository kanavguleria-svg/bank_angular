import { Component, OnInit } from '@angular/core';
import * as e from 'express';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css'],
})
export class LandingNavComponent implements OnInit {
  customer = new Customer();
  showDropDown = false;
  link:string="/login";


  constructor() {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      if(this.customer.authStatus=="AUTH"){
        this.link="/payment"
      }
      }
    }
    
  

  showDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }
}
