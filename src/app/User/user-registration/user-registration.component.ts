import { Component, OnInit } from '@angular/core';
import { Account_details, User } from 'src/app/types/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  customerId:number;
  account_details:Account_details;
  user:User;
  message:any;
  myScriptElement: HTMLScriptElement;

  

  saveUser(){
    console.log(this.user);
    this.account_details=new Account_details;
    this.service.saveUser(this.user)
    .subscribe(data => {
      this.message = data;
      this.customerId=parseInt(this.message);
      console.log(this.customerId);// read message // clear form
    }); 
    
  }

  saveAccountDetails(){
    console.log(this.account_details);
    this.service.saveAccountDetails(this.account_details,this.customerId)
    .subscribe(data => {
      this.message = data;
      this.account_details=new Account_details;
      this.user=new User;
      console.log(this.message); // read message // clear form
    }); 
  }
  


  constructor(private service:UserService) { 
      this.myScriptElement = document.createElement("script");
      this.myScriptElement.src = "assets/UserUpdateScript.js";
      document.body.appendChild(this.myScriptElement); 

  }

  ngOnInit(): void {
    this.user=new User;
    this.account_details=new Account_details;
    this.account_details.account_no=0;
    this.account_details.account_type=" ";
    this.account_details.branch_address=" ";
  
  }

}  

