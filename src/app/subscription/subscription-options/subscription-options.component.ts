import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-options',
  templateUrl: './subscription-options.component.html',
  styleUrls: ['./subscription-options.component.css']
})
export class SubscriptionOptionsComponent {
  plans = [
    { id: 'standard', name: 'Standard Box', description: 'Contiene 1 libro y stickers' },
    { id: 'medium', name: 'Medium Box', description: 'Contiene 1 libro, stickers, lapicera, postal coleccionable y vela' },
    { id: 'premium', name: 'Premium Box', description: 'Contiene 1 libro, stickers, lapicera, postal coleccionable, vela, cuaderno personalizado, review de lectura personalizada' }
  ];

  constructor(private router: Router) {}

  selectSubscription(option: string) {
    console.log('Selected:', option);
    this.router.navigate(['/user']);
  }
}