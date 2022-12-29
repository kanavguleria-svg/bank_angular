import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserContactQuery } from 'src/app/models/userquery.model';

@Component({
  selector: 'app-adminquery',
  templateUrl: './adminquery.component.html',
  styleUrls: ['./adminquery.component.css'],
})
export class AdminqueryComponent implements OnInit {
  adminUserQueries: UserContactQuery[];
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getAllUserQuery();
  }
  getAllUserQuery() {
    this.adminService.getUserQuery().subscribe((data) => {
      console.log(data);
      this.adminUserQueries = data;
    });
  }
}
