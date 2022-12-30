import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/models/CreditCard';
import { Customer } from 'src/app/models/customer.model';


import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {


  customer=new Customer();
  constructor(private creditCardServ:CreditCardService ) {}

  id:number;
  ngOnInit(): void {
    this.creditCard= new CreditCard();
    if(sessionStorage.getItem('userdetails')){
      this.customer=JSON.parse(sessionStorage.getItem('userdetails')!);
      this.id=this.customer.customer_id;
    }
  }

  
  creditCard:CreditCard;

  message:string;
  
  createCreditCard(id:number,credit_card:CreditCard){
    this.creditCardServ.createCreditCard(this.id,this.creditCard).subscribe(data =>{
      console.log("credit card is running ");
      this.message = data;
      this.creditCard = new CreditCard();
    }, error => {
      console.log(error);
    });
    
  }

}
