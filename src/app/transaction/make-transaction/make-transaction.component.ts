import { Component, OnInit } from '@angular/core';
import { TransactionDetails } from '../trxn';
import { TrxnService } from '../trxn.service';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {

  trxndetails: TransactionDetails;
  message: string = '';

  constructor(private service: TrxnService) { }

  ngOnInit(): void {
    this.trxndetails = new TransactionDetails();
  }

  maketrxn() {
    console.log(this.trxndetails);
    this.service.maketrxn(this.trxndetails, 0).subscribe(data => {
      this.message = data;
      this.trxndetails = new TransactionDetails();
    }, error => {
      console.log(error);
    }
    )
  }

}
