import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Payee } from 'src/app/models/payee';
import { PayeeServiceService } from '../payee-service.service';

@Component({
  selector: 'app-all-payee',
  templateUrl: './all-payee.component.html',
  styleUrls: ['./all-payee.component.css']
})
export class AllPayeeComponent implements OnInit {
  payee:Payee[];
  customer= new Customer();
  customerId:number=this.customer.id;
  message:any;
  dtOptions: any;

  constructor(private service:PayeeServiceService, private router: Router) { }

  getAllPayee(){
    this.service.getAllPayee(this.customerId).subscribe(data => {
      this.payee = data;
      console.log(this.payee); // read message // clear form 
    });

  }

  updatePayee(id: number) {
    this.router.navigate(['/updatePayee',id]);
  }

  deletePayee(id:number){
    if (confirm('Do you want to delete?')) {
      this.service.deletePayee(id).subscribe(data => {
        this.message = data;
        this.getAllPayee();
      });
    } else {
      this.message = 'failed';
    }

  }



  ngOnInit(): void {
    if(sessionStorage.getItem('userdetails')){
      this.customer=JSON.parse(sessionStorage.getItem('userdetails')!);
      
  }
  this.getAllPayee();
  this.dtOptions = {
    pageLength: 5,
  lengthMenu : [5, 10, 25, 50, 100],
    order: [[0, 'desc']],
    responsive: true,
    columnDefs: [ {
      'targets': [1,2,4,6], /* column index */
      'orderable': false, /* true or false */
  
   }]
    // dom: 'Blfrtip',  buttons: ['copy', 'print', 'csv', 'excel', 'pdf' ]
  };
}

}
