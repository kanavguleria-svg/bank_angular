import { Component, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/types/CreditCard';


import { CreditCardService } from './credit-card.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  constructor(private creditCardServ:CreditCardService ) {}

  ngOnInit(): void {
    this.creditCard= new CreditCard();
  }

  id:number=3;
 
  
  creditCard:CreditCard;

  message:string;

  createCreditCard(id:number,credit_card:CreditCard){
    this.creditCardServ.createCreditCard(this.id,this.creditCard).subscribe(data =>{
      console.log("credit card is running ");
      
      this.message = data;
      this.creditCard = new CreditCard();
    }
    );
  }
}
