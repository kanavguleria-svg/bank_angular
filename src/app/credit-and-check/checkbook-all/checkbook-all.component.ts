import { Component, OnInit } from '@angular/core';
import { CheckBookServiceService } from '../check-book-service.service';

@Component({
  selector: 'app-checkbook-all',
  templateUrl: './checkbook-all.component.html',
  styleUrls: ['./checkbook-all.component.css']
})
export class CheckbookAllComponent implements OnInit {


constructor(private checkbookServe: CheckBookServiceService) {}

  ngOnInit(): void { 
    this.getCheckBooks();
  }

  checkbookCollection:[];

  getCheckBooks(){
    this.checkbookServe.getCheckBooks().subscribe(data=>{
      console.log("all checkbooks are fetched");
      this.checkbookCollection=data;
      console.log(this.checkbookCollection);
      
    //  for (var i of this.creditCollection)
    //  {
    //    for(const j of Object.keys(i))
    //    {
    //       console.log(j);
          
    //    }
        
    //  }
      
    },error => {
      console.log(error);
    });
  }

  
  findRecords(record:{}){

  
  return Object.values(record);
  }




}
