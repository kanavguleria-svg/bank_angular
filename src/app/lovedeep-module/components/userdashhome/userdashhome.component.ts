import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { TransactionDetails } from 'src/app/transaction/trxn';
import { TrxnService } from 'src/app/transaction/trxn.service';

@Component({
  selector: 'app-userdashhome',
  templateUrl: './userdashhome.component.html',
  styleUrls: ['./userdashhome.component.css'],
})
export class UserdashhomeComponent implements OnInit {
  trxnhistory: TransactionDetails[];
  dtOptions: any = {};
  customer = new Customer();
  accountBalance: number;
  account_num_sender: number;
  start = 0;
  end = 0;

  constructor(private service: TrxnService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
      this.accountBalance = this.customer['account_details'].account_balance;
      this.account_num_sender = this.customer['account_details'].account_no;
    }
    this.service.getAccount(this.customer['customer_id']).subscribe(data => {
      this.accountBalance = data.account_balance;
    }, error => {
      console.log(error);
    }
    )

    setTimeout((): Observable<any> => {
      this.dtOptions = {
        pageLength: 5
      }
      return (this.dtOptions)
    }, 3000);

    this.getAlltrxn();
    this.dtOptions.subscribe;
    
    // this.dtOptions.subscribe( this.dtOptions = {
    //   pageLength: 5,
    //     // lengthMenu: [5, 10, 25, 50, 100],
    //     dom: 't',
    //     paging: false,
    //     order: [[0, 'desc']],
    //     responsive: true,
    //     columnDefs: [{
    //       'targets': [1, 2, 4, 6], /* column index */
    //       'orderable': false, /* true or false */
    //     }]
    //     // dom: 'Blfrtip',  buttons: ['copy', 'print', 'csv', 'excel', 'pdf' ]
    // });


    
  }
  getAlltrxn() {
    this.service.getAlltrxn(this.customer['customer_id']).subscribe(data => {
      this.trxnhistory = data;
      this.end= this.trxnhistory.length;
      this.start = this.trxnhistory.length - 5;
    }, error => {
      console.log(error);
    })
  }
}
