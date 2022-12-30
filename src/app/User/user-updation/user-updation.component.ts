import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-updation',
  templateUrl: './user-updation.component.html',
  styleUrls: ['./user-updation.component.css']
})
export class UserUpdationComponent implements OnInit {
  user:User;
  message: string;
  customer= new Customer();
  customerId:number=this.customer.customer_id;
  toggle = false;

  constructor(private service:UserService) { }
  ngOnInit(): void {
    this.user=new User;
    if(sessionStorage.getItem('userdetails')){
      this.customer=JSON.parse(sessionStorage.getItem('userdetails')!);
  }
}

  updateUser() {
    this.toggle = true;
    console.log(this.user);
    this.service.updateUser(this.customerId,this.user)
    .subscribe(data => {
      this.message = data;
      this.user=new User;
      console.log(this.message); // read message // clear form 
    }); 
  }

}
