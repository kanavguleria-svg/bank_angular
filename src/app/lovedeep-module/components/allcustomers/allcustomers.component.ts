import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { Account_details } from 'src/app/models/user';

@Component({
  selector: 'app-allcustomers',
  templateUrl: './allcustomers.component.html',
  styleUrls: ['./allcustomers.component.css'],
})
export class AllcustomersComponent implements OnInit {
  allCustomers: Customer[];
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getAllCustomer();
  }
  getAllCustomer() {
    this.adminService.getAllCustomer().subscribe((data) => {
      this.allCustomers = data;
      console.log(this.allCustomers);
    });
  }

  generateOffer(id: number) {
    this.router.navigate(['generateOffers', id]);
  }
}
