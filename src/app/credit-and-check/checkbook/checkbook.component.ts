import { Component, OnInit } from '@angular/core';
import { CheckBook } from 'src/app/models/checkBook';
import { CheckBookServiceService } from '../check-book-service.service';


@Component({
  selector: 'app-checkbook',
  templateUrl: './checkbook.component.html',
  styleUrls: ['./checkbook.component.css'],
})
export class CheckbookComponent implements OnInit {

  constructor(private checkbookServ:CheckBookServiceService) { }

  id:number=3;
  message:string;
  checkbook:CheckBook;
  ngOnInit(): void {
    this.checkbook=new CheckBook();
    
  }

  


  createCheckBook(customer_id:number,checkbook:CheckBook){
    console.log("checkboook function is runnig");
    this.checkbookServ.createCheckBook(customer_id,checkbook).subscribe(data=>{
      
      
      this.message=data;
      this.checkbook=new CheckBook();
    }, error => {
      console.log(error);
    });
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
