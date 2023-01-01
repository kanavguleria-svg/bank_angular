import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Cookies, removeCookie } from 'typescript-cookie';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("Entered logout component")
    window.sessionStorage.removeItem('userdetails');
    window.sessionStorage.removeItem('XSRF-TOKEN');
    this.router.navigate(['/home']);
  }
}
