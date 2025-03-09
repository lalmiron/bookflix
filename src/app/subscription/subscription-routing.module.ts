import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionOptionsComponent } from './subscription-options/subscription-options.component';

const routes: Routes = [
  {path: '', component: SubscriptionOptionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
