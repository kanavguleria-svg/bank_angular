import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer';
import { OfferServiceService } from '../offer-service.service';

@Component({
  selector: 'app-offers-amdin',
  templateUrl: './offers-amdin.component.html',
  styleUrls: ['./offers-amdin.component.css']
})
export class OffersAmdinComponent implements OnInit {


  constructor(private offerserv:OfferServiceService) { }

  ngOnInit(): void {
    this.offer = new Offer();
  }

  message:string;
  offer:Offer;

  saveOffer(offer:Offer){
    this.offerserv.createOffer(this.offer).subscribe(data=>{
        this.message=data;
    })

  }


}
