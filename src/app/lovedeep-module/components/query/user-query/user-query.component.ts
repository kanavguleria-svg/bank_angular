import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { UserContactQuery } from 'src/app/models/userquery.model';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css'],
})
export class UserQueryComponent implements OnInit {
  model: UserContactQuery;
  customer = new Customer();
  message = '';

  constructor(private queryService: QueryService, private router: Router) {}
  saveUserQuery() {
    this.queryService
      .postUserQuery(this.model, this.customer.customer_id)
      .subscribe((responseData) => {
        (data) => {
          console.log(this.model);
        };
      });
    this.message = 'Query Sent, We will Soon Get Back To You :)';
  }
  ngOnInit(): void {
    this.model = new UserContactQuery();
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      console.log(this.customer);
    }
  }
}
