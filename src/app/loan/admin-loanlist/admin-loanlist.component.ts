import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { LoanList } from '../admin-loanlist';
import { LoanReqService } from '../loan-req.service';

@Component({
  selector: 'app-admin-loanlist',
  templateUrl: './admin-loanlist.component.html',
  styleUrls: ['./admin-loanlist.component.css']
})
export class AdminLoanlistComponent implements OnInit {

  loanlist: LoanList[];
  dtOptions: any = {};

  constructor(private service: LoanReqService) { }

  ngOnInit(): void {
    
    setTimeout((): Observable<any> => {
      return (this.dtOptions)
    }, 3000);

    this.getloanlist();

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

  getloanlist() {
    return this.service.getLoanRequests().subscribe( data => {
      console.log(data)
      this.loanlist = data;
    }, error => {
      console.log(error)
    })
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

}
