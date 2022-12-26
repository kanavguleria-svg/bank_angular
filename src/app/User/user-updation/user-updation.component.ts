import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-updation',
  templateUrl: './user-updation.component.html',
  styleUrls: ['./user-updation.component.css']
})
export class UserUpdationComponent implements OnInit {
  user:User;
  message: string;
  customerId:number=153;
  toggle = false;

  constructor(private service:UserService) { }

  
  // status = 'Enable'; 
  
  // enableDisableRule() {
  //     this.toggle = !this.toggle;
  //     this.status = this.toggle ? 'Enable' : 'Disable';
  // }
  ngOnInit(): void {
    this.user=new User;
    // this.service.getcustomerId()
    // .subscribe(data=>{
    //   this.customerId=data.customer_id;
    // })
 
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
