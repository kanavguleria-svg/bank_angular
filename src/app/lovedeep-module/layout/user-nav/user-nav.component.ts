import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import Swal from 'sweetalert2';
import { LogoutServiceService } from '../../logout-service.service';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css'],
})
export class UserNavComponent implements OnInit {
  customer = new Customer();

  constructor(private router: Router, private logoutService: LogoutServiceService) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.customer = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
  }

  logoutSession(){
    console.log("entered logout session method")
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
        console.log("entered logout service")
        this.logoutService.logout(this.customer.username, this.customer.password).subscribe();
        console.log("crossed logout service")
        this.navigatetologout();
            } else if (result.isDenied) {
        console.log("denied")
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  navigatetologout() {
    console.log("trying to call logout page")
    this.router.navigate(["logout"])
  }
}
