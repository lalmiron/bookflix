import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{

  @Input() subscriptionId: number | null = null;
  user = {  firstName: '', lastName: '', email: '', address: '' };
  showToast: boolean = false; 
  userForm: FormGroup;
  
  constructor(public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

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