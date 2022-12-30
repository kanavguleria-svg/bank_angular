import { Component, OnInit } from '@angular/core';
import { CheckBook } from 'src/app/models/checkBook';
import { Customer } from 'src/app/models/customer.model';
import { CheckBookServiceService } from '../check-book-service.service';


@Component({
  selector: 'app-checkbook',
  templateUrl: './checkbook.component.html',
  styleUrls: ['./checkbook.component.css'],
})
export class CheckbookComponent implements OnInit {

  constructor(private checkbookServ:CheckBookServiceService) { }
  customer=new Customer();
  id:number=this.customer.customer_id;
  message:string;
  checkbook:CheckBook;
  ngOnInit(): void {
    
    this.checkbook=new CheckBook();
    if(sessionStorage.getItem('userdetails')){
      this.customer=JSON.parse(sessionStorage.getItem('userdetails')!);
      this.id=this.customer.customer_id;
    }
    
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
