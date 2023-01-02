import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Observable, Subject } from 'rxjs';
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
  private customer_id: number;
  account_num_sender: number;

  constructor(private service: TrxnService) {
    this.account_num_sender = 1234;

  }

  ngOnInit(): void {

    setTimeout((): Observable<any> => {
      return (this.dtOptions)
    }, 3000);

    this.getcustomerId();
    this.getAlltrxn();
    this.dtOptions.subscribe( this.dtOptions = {
      pageLength: 5,
        lengthMenu: [5, 10, 25, 50, 100],
        order: [[0, 'desc']],
        responsive: true,
        columnDefs: [{
          'targets': [1, 2, 4, 6], /* column index */
          'orderable': false, /* true or false */
        }]
        // dom: 'Blfrtip',  buttons: ['copy', 'print', 'csv', 'excel', 'pdf' ]
    });

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
    })
  }

}
