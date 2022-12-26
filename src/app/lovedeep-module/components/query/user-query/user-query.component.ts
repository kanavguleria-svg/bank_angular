import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css'],
})
export class UserQueryComponent implements OnInit {
  message!: string;

  constructor() {}

  ngOnInit(): void {}
}
