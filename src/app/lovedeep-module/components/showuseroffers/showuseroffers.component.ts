import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { UserOffers } from 'src/app/models/useroffer.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-showuseroffers',
  templateUrl: './showuseroffers.component.html',
  styleUrls: ['./showuseroffers.component.css'],
})
export class ShowuseroffersComponent implements OnInit {
  offers: UserOffers[];
  customer = new Customer();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      this.getUserOffers();
    }
  }
  getUserOffers() {
    this.userService
      .getUserOffers(this.customer.customer_id)
      .subscribe((data) => {
        this.offers = data;
        console.log(data);
      });
  }
}
