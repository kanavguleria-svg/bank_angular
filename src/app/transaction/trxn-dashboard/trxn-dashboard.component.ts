import { Component, OnInit } from '@angular/core';
import { TransactionDetails } from '../trxn';
import { TrxnService } from '../trxn.service';

@Component({
  selector: 'app-trxn-dashboard',
  templateUrl: './trxn-dashboard.component.html',
  styleUrls: ['./trxn-dashboard.component.css']
})
export class TrxnDashboardComponent implements OnInit {
  dtOptions: any = {};
  trxnhistory: TransactionDetails[] = [
    
  ];
  customer_id: number;

  constructor(private service: TrxnService) { }

  ngOnInit(): void {

    this.dtOptions = {
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      order: [[0, 'desc']],
      responsive: true,
      columnDefs: [{
        'targets': [1, 2, 4, 6], /* column index */
        'orderable': false, /* true or false */
      }]
      // dom: 'Blfrtip',  buttons: ['copy', 'print', 'csv', 'excel', 'pdf' ]
    };
    this.getcustomerId();
    this.getAlltrxn();
  }

  getcustomerId() {
    if(sessionStorage.getItem('userdetails')){
      this.customer_id = JSON.parse(sessionStorage.getItem('userdetails')).customer_id;
    }
  }

  getAlltrxn() {
    this.service.getAlltrxn(this.customer_id).subscribe(data => {
      this.trxnhistory = data;
    }, error => {
      console.log(error);
    }
    )
  }

}
