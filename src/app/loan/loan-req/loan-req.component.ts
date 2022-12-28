import { Component, OnInit } from '@angular/core';
import { LoanReq } from '../loan-req';
import { LoanReqService } from '../loan-req.service';
import { LoanAccount } from '../loanacc';

interface loan_amount{
    id: number;
    value: string;
}

@Component({
  selector: 'app-loan-req',
  templateUrl: './loan-req.component.html',
  styleUrls: ['./loan-req.component.css']
})
export class LoanReqComponent implements OnInit {

  loantypes: string[] = [
    'Home Loan',
    'Car Loan',
    'Business Loan',
    'Education Loan',
    'Personal Loan'
  ];

  loanamount: loan_amount[] = [
    {id: 100000, value: "1 Lakh"},
    {id: 200000, value: "2 Lakhs"},
    {id: 300000, value: "3 Lakhs"},
    {id: 400000, value: "4 Lakhs"},
    {id: 500000, value: "5 Lakhs"},
    {id: 1000000, value: "10 Lakhs"},
    
  ];

  loanterm: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20
  ]

  loanrate: string = "Loan Rate of Interest";

  custom_loan_amt: number;

  otherval: number = 0;

  loanReqDetails: LoanReq;
  loanacc: LoanAccount;
  message: string;
  customer_id: number = 0;
  customphacc: string;

  constructor(private service: LoanReqService) { }

  ngOnInit(): void {
    this.loanReqDetails = new LoanReq();
    this.loanReqDetails.loan_type = null;
    this.loanReqDetails.loan_amt = 0;
    this.loanReqDetails.loan_term = 0;
    this.getCustomerAccno();
    
  }

  loanrequest() {
    console.log("loan request Initiated");
    if (this.loanReqDetails.loan_amt==0){
      this.loanReqDetails.loan_amt = this.custom_loan_amt;
    }
    this.service.loanRequest(this.loanReqDetails, this.customer_id).subscribe(data => {
      this.message = data;
      console.log(this.message);
      console.log(this.loanReqDetails);
      console.log(typeof this.loanReqDetails.loan_amt)
      this.loanReqDetails = new LoanReq();
    }, (error: any) => {
      console.log(error);
    })
  }

  getCustomerAccno() {
    this.service.getCustomerAccno(this.customer_id).subscribe(data =>{
    this.loanacc=data;
    this.customphacc = "Your Account No : ".concat(this.loanacc.account_no);
    })
  }

  calculate_loan_rate(term: number, amount: any) {
    console.log("called")
    console.log(typeof term)
    console.log(amount)
    amount = parseInt(amount)
    console.log(typeof amount)

    let final_rate: number = 0;
    if (term>=1 && term<=5) {
      final_rate = 11.2;
      this.loanReqDetails.loan_rate=11.2;
    }
    else if (term>5 && term <=10) {
      final_rate = 8.1;
      this.loanReqDetails.loan_rate=8.1;
    }
    else {
      final_rate = 5.3;
      this.loanReqDetails.loan_rate=5.3;
    }
    this.loanrate = "Loan rate : "+final_rate+"% Your final amount will be ₹ "+((final_rate*amount)/100)+" + "+((final_rate*amount)/100+amount).toFixed(2);
  }

}
