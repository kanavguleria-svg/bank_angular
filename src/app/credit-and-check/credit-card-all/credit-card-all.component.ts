import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { ListFormat } from 'typescript';
import { CreditCardService } from '../credit-card.service';

@Component({
  selector: 'app-credit-card-all',
  templateUrl: './credit-card-all.component.html',
  styleUrls: ['./credit-card-all.component.css']
})
export class CreditCardAllComponent implements OnInit {

creditCollection:[];
creditArray:[];
constructor(private creditCardServ:CreditCardService ) {}

  ngOnInit(): void { 
    this.getCreditCards();
  }

  getCreditCards(){
    this.creditCardServ.getCreditCard().subscribe(data=>{
      console.log("all credit cards are fetched");
      this.creditCollection=data;
      console.log(this.creditCollection);

      console.log(this.creditCollection,"---------");
      
      
    //  for (var i of this.creditCollection)
    //  {
    //    for(const j of Object.keys(i))
    //    {
    //       console.log(j);
          
    //    }
        
    //  }
      
    },error => {
      console.log(error);
    });
  }

  
  findRecords(record:{}){

  
  return Object.values(record);
  }




}
