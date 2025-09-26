import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent{

  showToast: boolean = false; 
  userForm: FormGroup;
  
  constructor(public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      address: ['', Validators.required]
    });
  }

  onNext() {
    if (this.userForm.invalid) {
       this.userForm.markAllAsTouched();
       return;
      }
      this.showToast = true;
      console.log(this.userForm.value);
      setTimeout(() => {
        this.showToast = false;
        this.activeModal.close(this.userForm.value); 
      }, 3000);
    }
  }