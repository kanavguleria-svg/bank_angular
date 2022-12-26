import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-checkbook',
  templateUrl: './checkbook.component.html',
  styleUrls: ['./checkbook.component.css'],
})
export class CheckbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  images = [
    {
      imageSrc: '../assets/img/creditcard.jpg',
      imageAlt: 'creditcard',
      imageDesc: 'Get 0 Fee Credit Card',
    },
    {
      imageSrc: '../assets/img/netbanking.jpg',
      imageAlt: 'netbanking',
      imageDesc: 'Make your Netbanking Easy',
    },
    {
      imageSrc: '../assets/img/sip.jpg',
      imageAlt: 'investment',
      imageDesc: 'Open Free Demat Account And Boost Your Investment',
    },
  ];

}
