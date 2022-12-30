import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Subject } from 'rxjs';
import { TransactionDetails } from '../trxn';
import { TrxnService } from '../trxn.service';

@Component({
  selector: 'app-trxn-dashboard',
  templateUrl: './trxn-dashboard.component.html',
  styleUrls: ['./trxn-dashboard.component.css']
})
export class TrxnDashboardComponent implements OnInit {
  dtOptions: any = {};
  trxnhistory: TransactionDetails[];
    // = [
    //   {
    //     "account_num_reciever": 5678,
    //     "account_num_sender": 1234,
    //     "transaction_amt": 1000,
    //     "trxnDescription": "TR",
    //     "transaction_id": 1,
    //     "transaction_dt": '1-1-1',
    //     "customer_id": 0,
    //     "closing_bal_sender": 9000,
    //     "closing_bal_reciever": 10000
    //   },
    //   {
    //     "account_num_reciever": 1234,
    //     "account_num_sender": 5678,
    //     "transaction_amt": 1000,
    //     "trxnDescription": "TR",
    //     "transaction_id": 1,
    //     transaction_dt: '1-1-1',
    //     customer_id: 0,
    //     closing_bal_sender: 9000,
    //     closing_bal_reciever: 10000
    //   }
    // ];
  private customer_id: number;
  account_num_sender: number;

  constructor(private service: TrxnService) {
    this.account_num_sender = 1234;

  }



  ngOnInit(): void {   
    
    setTimeout(() => {
      this.dtOptions = {
        pageLength: 5,
        lengthMenu: [10, 25, 50, 100],
        order: [[0, 'desc']],
        responsive: true,
        columnDefs: [{
          'targets': [1, 2, 4, 6], /* column index */
          'orderable': false, /* true or false */
        }]
        // dom: 'Blfrtip',  buttons: ['copy', 'print', 'csv', 'excel', 'pdf' ]
      };
    }, 3000);


    
    this.getcustomerId();
    this.getAlltrxn();
    this.dtOptions.subscribe();

  }

  getcustomerId() {
    if (sessionStorage.getItem('userdetails')) {
      this.customer_id = JSON.parse(sessionStorage.getItem('userdetails')).customer_id;
      // JSON.parse(sessionStorage.getItem('userdetails')).account_details.account_num_sender
    }
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('mytable');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Account Summary.pdf');
    });
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
