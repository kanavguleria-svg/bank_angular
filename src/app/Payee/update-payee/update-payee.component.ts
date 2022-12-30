import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payee } from 'src/app/models/payee';
import { PayeeServiceService } from '../payee-service.service';

@Component({
  selector: 'app-update-payee',
  templateUrl: './update-payee.component.html',
  styleUrls: ['./update-payee.component.css']
})
export class UpdatePayeeComponent implements OnInit {
  showDropDown = false;
  payee:Payee;
  message:any;
  payeeId:number;
  toggle:boolean=false;

  constructor(private service:PayeeServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  updatePayee() {
    this.toggle = true;
    console.log(this.payee);
    this.service.updatePayee(this.payeeId,this.payee)
    .subscribe(data => {
      this.message = data;
      this.payee=new Payee;
      console.log(this.message); // read message // clear form
      
    });
  }
  showDropdown(): void {
    this.showDropDown = !this.showDropDown;
  }
  ngOnInit(): void {
    this.payeeId = this.activatedRoute.snapshot.params['id'];
    this.payee=new Payee;
  }

}
