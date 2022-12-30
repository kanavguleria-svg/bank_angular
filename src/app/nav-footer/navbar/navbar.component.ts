import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  customer = new Customer();
  constructor() { }

  ngOnInit(): void {
   
  if (sessionStorage.getItem('userdetails')) {
    this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
  }
}

}
