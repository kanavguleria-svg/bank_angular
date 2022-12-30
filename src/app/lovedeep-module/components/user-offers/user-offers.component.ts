import { Component, OnInit } from '@angular/core';
import { UserOffers } from 'src/app/models/useroffer.model';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.css'],
})
export class UserOffersComponent implements OnInit {
  customerId: number;
  offer: UserOffers;
  message = '';

  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.offer = new UserOffers();
    this.customerId = this.activatedRoute.snapshot.params['id'];
    console.log(this.customerId);
  }

  postUserOffers() {
    this.adminService
      .postUserOffers(this.offer, this.customerId)
      .subscribe((data) => {
        console.log('Offer Generated');
      });
  }
}
