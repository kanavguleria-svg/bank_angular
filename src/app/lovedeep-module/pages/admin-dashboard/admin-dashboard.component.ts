import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Customer } from 'src/app/models/customer.model';
import { ActivatedRoute } from '@angular/router';
import { LoanReqService } from 'src/app/loan/loan-req.service';
import { LoanList } from 'src/app/loan/admin-loanlist';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  dtOptions: any = {};
  allCustomers: Customer[];
  totalUsers: number;
  loanlist: LoanList[];
  constructor(private adminService: AdminService, private loanservice: LoanReqService) {}

  ngOnInit(): void {
    setTimeout((): Observable<any> => {
      return (this.dtOptions)
    }, 3000);

    this.getloanlist();
    this.getAllCustomer();
    this.dtOptions.subscribe( this.dtOptions = {
      pageLength: 2,
        // lengthMenu: [5, 10, 25, 50, 100],
        order: [[0, 'desc']],
        // responsive: true,
        columnDefs: [{
          'targets': [0, 1, 2, 3, 4, 5, 6, 7], /* column index */
          'orderable': false, /* true or false */
        }],
        // dom: 'Blfrtip',  buttons: ['copy', 'print', 'csv', 'excel', 'pdf' ]
        dom: 't',
    });
    
  }
  getAllCustomer() {
    this.adminService.getAllCustomer().subscribe((data) => {
      this.allCustomers = data;
      this.totalUsers = this.allCustomers.length;
    });
  }
  getloanlist() {
    return this.loanservice.getLoanRequests().subscribe( data => {
      console.log(data)
      this.loanlist = data;
    }, error => {
      console.log(error)
    })
  }
}
