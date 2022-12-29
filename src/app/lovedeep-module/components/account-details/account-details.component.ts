import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Account_details, User } from 'src/app/models/user';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor() { }

  customer=new Customer();
  accountdetails:Account_details;
  uniqueIdentity:any;
  uniqueNo:any;

  

  id:number=this.customer.customer_id;

  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')){
      this.customer=JSON.parse(sessionStorage.getItem('userdetails')!);
      console.log(this.customer);
      this.accountdetails = this.customer['account_details'];
      this.uniqueIdentity = this.customer['unique_identity']
      this.uniqueNo = this.customer['unique_identity_number'];
      // console.log(this.customer);
      
      // console.log(this.accountdetails);
      
      
      
    }
  }

  payTog = false;
  payetoggel(){
    this.payTog=!this.payTog;
  }

  findRecords(record:{}){
    return Object.values(record);
  }




  accountDetailId(){

  }

}
