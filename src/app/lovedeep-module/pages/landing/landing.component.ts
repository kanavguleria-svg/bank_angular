import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { LandingNavComponent } from '../../layout/landing-nav/landing-nav.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
