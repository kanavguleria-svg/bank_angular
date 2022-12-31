import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Payee } from 'src/app/models/payee';
import { PayeeServiceService } from '../payee-service.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Swal from 'sweetalert2';
import { Observable, observable } from 'rxjs';


@Component({
  selector: 'app-all-payee',
  templateUrl: './all-payee.component.html',
  styleUrls: ['./all-payee.component.css']
})
export class AllPayeeComponent implements OnInit {
  payee:Payee[];
  customer= new Customer();
  customerId:number;
  message:any;
  dtOptions: any;

  constructor(private service:PayeeServiceService, private router: Router) { }

  public openPDF(): void {
    let DATA: any = document.getElementById('mytable');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('yourpayees.pdf');
    });
  }
  

  getAllPayee(){
    console.log(this.customerId)
    this.service.getAllPayee(this.customerId).subscribe(data => {
      this.payee = data;
      console.log(this.payee); 
      // read message // clear form 
    });

  }

  updatePayee(id: number) {
    this.router.navigate(['/updatePayee',id]);
  }

  deletePayee(id:number){

    Swal.fire({
      title: 'Do you want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      // customClass: {
      //   actions: 'my-actions',
      //   cancelButton: 'order-1 right-gap',
      //   confirmButton: 'order-2',
      //   denyButton: 'order-3',
      // }
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deletePayee(id).subscribe(data => {
          this.message = data;
          this.getAllPayee();
        });
            } else if (result.isDenied) {
              this.message = 'failed';
        Swal.fire('Changes are not saved', '', 'info')
      }
    })



    // if (confirm('Do you want to delete?')) {
      
    // } else {
    //   this.message = 'failed';
    // }

  }



  ngOnInit(): void {
    setTimeout(() :Observable<any> => {return this.dtOptions
      
    }, 3000);
    if(sessionStorage.getItem('userdetails')){
      this.customer=JSON.parse(sessionStorage.getItem('userdetails')!);
      this.customerId=this.customer.customer_id;
      console.log(this.customerId);
      
      console.log("--------");
  }

  console.log(this.customer)
  this.getAllPayee();
  this.dtOptions.subscribe(
  // this.dtOptions = {
  //   pageLength: 5,
  // lengthMenu : [5, 10, 25, 50, 100],
  //   order: [[0, 'desc']],
  //   responsive: true,
  //   columnDefs: [ {
  //     'targets': [1,2,4,6], /* column index */
  //     'orderable': false, /* true or false */
  
  //  }]
  //   // dom: 'Blfrtip',  buttons: ['copy', 'print', 'csv', 'excel', 'pdf' ]
  // }
  );
}

}
