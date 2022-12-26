import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { LandingNavComponent } from 'src/app/layout/landing-nav/landing-nav.component';

@Component({
  selector: 'app-contact-query',
  templateUrl: './contact-query.component.html',
  styleUrls: ['./contact-query.component.css'],
})
export class ContactQueryComponent implements OnInit {
  name!: string;
  email!: string;
  phone!: string;
  message!: string;

  constructor() {}

  ngOnInit(): void {}
}
