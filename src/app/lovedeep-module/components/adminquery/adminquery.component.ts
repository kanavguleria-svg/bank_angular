import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserContactQuery } from 'src/app/models/userquery.model';
import { ContactQuery } from 'src/app/models/contactquery.model';

@Component({
  selector: 'app-adminquery',
  templateUrl: './adminquery.component.html',
  styleUrls: ['./adminquery.component.css'],
})
export class AdminqueryComponent implements OnInit {
  adminUserQueries: UserContactQuery[];
  contactQueries: ContactQuery[];
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

  getAllContactQuery() {
    this.adminService.getContactQuery().subscribe((data) => {
      console.log(data);
      this.contactQueries = data;
    });
  }
}
