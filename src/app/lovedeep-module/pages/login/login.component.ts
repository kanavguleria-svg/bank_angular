import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { LoginService } from 'src/app/services/login.service';
import { getCookie } from 'typescript-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authStatus: string = '';
  model = new Customer();
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}
  validateUser(loginForm: NgForm) {
    this.loginService
      .validateLoginDetails(this.model)
      .subscribe((responseData) => {
        this.model = <any>responseData.body;
        console.log(this.model);
        console.log(this.model);
        let xsrf = getCookie('XSRF-TOKEN')!;
        window.sessionStorage.setItem('XSRF-TOKEN', xsrf);
        this.model.authStatus = 'AUTH';
        window.sessionStorage.setItem(
          'userdetails',
          JSON.stringify(this.model)
        );
        // conditional dashboard rendering
        this.router.navigate(['customerdashboard']);
      });
  }
}
