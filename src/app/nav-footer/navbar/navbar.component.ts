import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutServiceService } from 'src/app/lovedeep-module/logout-service.service';
import { Customer } from 'src/app/models/customer.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  customer = new Customer();
  constructor(private logoutService: LogoutServiceService, private router: Router) { }

  ngOnInit(): void {
   
  if (sessionStorage.getItem('userdetails')) {
    this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
  }
}


logoutSession(){
  Swal.fire({
    title: 'Do you want to Logout?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Logout!',
    // customClass: {
    //   actions: 'my-actions',
    //   cancelButton: 'order-1 right-gap',
    //   confirmButton: 'order-2',
    //   denyButton: 'order-3',
    // }
  }).then((result) => {
    if (result.isConfirmed) {
      this.logoutService.logout(this.customer.username, this.customer.password).subscribe();
      this.navigatetologout();
          } else if (result.isDenied) {
      Swal.fire('You made the right choice!', '', )
    }
  })
}

navigatetologout() {
  this.router.navigate(["logout"])
}

}
