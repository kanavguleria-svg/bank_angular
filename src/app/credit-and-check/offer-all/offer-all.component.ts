import { Component, OnInit } from '@angular/core';
import { OfferServiceService } from '../offer-service.service';

@Component({
  selector: 'app-offer-all',
  templateUrl: './offer-all.component.html',
  styleUrls: ['./offer-all.component.css']
})
export class OfferAllComponent implements OnInit {

 
constructor(private offerServ: OfferServiceService) {}
dtOptions:any;
ngOnInit(): void {

  this.getOffers();

}

offersCollection:[];

getOffers(){
  console.log("this is working");
  
  this.offerServ.getOffer().subscribe(data=>{
    console.log("all offers are fetched");
    this.offersCollection=data;
    console.log(this.offersCollection);
    
  //  for (var i of this.creditCollection)
  //  {
  //    for(const j of Object.keys(i))
  //    {
  //       console.log(j);
        
  //    }
      
  //  }
    
  });
}


findRecords(record:{}){


return Object.values(record);
}


}
