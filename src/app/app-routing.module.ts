import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionOptionsComponent } from './subscription/subscription-options/subscription-options.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { PaymentDetailsComponent } from './payment/payment-details/payment-details.component';

const routes: Routes = [
  { path: '', component: SubscriptionOptionsComponent },
  { path: 'user', component: UserDetailsComponent },
  { path: 'payment', component: PaymentDetailsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }