import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() subscriptionId: number | null = null;
  user = {  firstName: '', lastName: '', email: '', address: '' };
  showToast: boolean = false; // Controla la visibilidad del toast

  constructor(public activeModal: NgbActiveModal) {}

  onNext() {
    if (this.isFormValid()) {
      this.showToast = true;

      setTimeout(() => {
        this.showToast = false;
        this.activeModal.close(); 
      }, 3000);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  private isFormValid(): boolean {
    console.log(this.user);
    return Object.values(this.user).every(field => field.trim() !== '');
  }
}