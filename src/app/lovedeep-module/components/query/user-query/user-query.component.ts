import { Component, OnInit } from '@angular/core';
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

  constructor(private queryService: QueryService) {}
  saveUserQuery() {
    this.queryService
      .postUserQuery(this.model, this.customer.customer_id)
      .subscribe((responseData) => {
        (data) => {
          console.log(this.model);
        };
      });
  }
  ngOnInit(): void {
    this.model = new UserContactQuery();
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      console.log(this.customer);
    }
  }
}
