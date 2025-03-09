import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    address: ''
  };

  constructor(private router: Router) {}

  /**
   * Función que se ejecuta cuando el usuario envía el formulario
   */
  onNext(): void {
    if (this.isFormValid()) {
      console.log('User Details:', this.user);
      this.router.navigate(['/payment']); // Redirige al formulario de pago
    } else {
      alert('Please fill in all fields.');
    }
  }

  /**
   * Valida si todos los campos del formulario están llenos
   */
  private isFormValid(): boolean {
    return Object.values(this.user).every(field => field.trim() !== '');
  }
}