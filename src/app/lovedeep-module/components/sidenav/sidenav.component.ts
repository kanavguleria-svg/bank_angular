import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  collapsed = true;

  constructor(private router:Router) {}

  ngOnInit(): void {}

  toggleBtn() {
    this.collapsed = !this.collapsed;
  }

  
}


