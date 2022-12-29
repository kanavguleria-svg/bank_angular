import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  allCustomers: Customer[];
  totalUsers: number;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllCustomer();
  }
  getAllCustomer() {
    this.adminService.getAllCustomer().subscribe((data) => {
      this.allCustomers = data;
      this.totalUsers = this.allCustomers.length;
    });
  }
}
