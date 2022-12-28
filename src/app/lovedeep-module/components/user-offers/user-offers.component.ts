import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { LandingNavComponent } from '../../layout/landing-nav/landing-nav.component';
@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.css'],
})
export class UserOffersComponent implements OnInit {
  startdate: string;
  enddate: string;
  offerdetails: string;
  constructor() {}

  ngOnInit(): void {}
}
