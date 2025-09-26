import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionOptionsComponent } from './subscription/subscription-options/subscription-options.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  //{ path: '', component: HomeComponent }
  { path: 'suscripcion', component: SubscriptionOptionsComponent },
  { path: 'review', component: ReviewsComponent},
  { path: 'faq', component: FaqComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }