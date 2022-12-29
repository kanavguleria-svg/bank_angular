import { Component, OnInit } from '@angular/core';
import { ContactQuery } from 'src/app/models/contactquery.model';
import { QueryService } from 'src/app/services/query.service';

@Component({
  selector: 'app-contact-query',
  templateUrl: './contact-query.component.html',
  styleUrls: ['./contact-query.component.css'],
})
export class ContactQueryComponent implements OnInit {
  model: ContactQuery;
  message: any;

  constructor(private queryService: QueryService) {}
  saveContactQuery() {
    this.queryService.postContactQuery(this.model).subscribe((responseData) => {
      (data) => {
        this.message = data;
        console.log(this.model);
      };
    });
  }

  ngOnInit(): void {
    this.model = new ContactQuery();
  }
}
