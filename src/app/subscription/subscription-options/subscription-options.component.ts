import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserDetailsComponent } from '../../user/user-details/user-details.component';

@Component({
  selector: 'app-subscription-options',
  templateUrl: './subscription-options.component.html',
  styleUrls: ['./subscription-options.component.css']
})
export class SubscriptionOptionsComponent {
  
  subscriptions = [
    { id: 1, name: 'Opción 1', price: 20000, image: 'assets/img-box.jpg' },
    { id: 2, name: 'Opción 2', price: 30000, image: 'assets/img-box.jpg' },
    { id: 3, name: 'Opción 3', price: 50000, image: 'assets/img-box.jpg' }
  ];

  constructor(private modalService: NgbModal) {}

  subscribe(id: number) {
    const modalRef = this.modalService.open(UserDetailsComponent, { centered: true });
    modalRef.componentInstance.subscriptionId = id; 
  }
}