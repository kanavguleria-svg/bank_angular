import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css'],
})
export class LandingNavComponent implements OnInit {
  showDropDown = false;

  constructor() {}

  ngOnInit(): void {}

  showDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }
}
