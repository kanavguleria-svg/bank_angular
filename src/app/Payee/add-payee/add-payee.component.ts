import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { Payee } from 'src/app/models/payee';
import { PayeeServiceService } from '../payee-service.service';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.css']
})
export class AddPayeeComponent implements OnInit {
  customer=new Customer();
  payee:Payee;
  customerId:number=this.customer.id;
  message:any;
  toggle:boolean=false;

  
  savePayee(){
    this.toggle=true;
    console.log(this.payee);
    this.service.savePayee(this.customerId,this.payee)
    .subscribe(data => {
      this.message = data;
      this.payee=new Payee;
      console.log(this.message);
  });
}

  constructor(private service:PayeeServiceService) { }

  ngOnInit(): void {
    this.payee=new Payee;
    if(sessionStorage.getItem('userdetails')){
      this.customer=JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    
  }

}
