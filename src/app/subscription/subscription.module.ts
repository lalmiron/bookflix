import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionOptionsComponent } from './subscription-options/subscription-options.component';


@NgModule({
  declarations: [
    SubscriptionOptionsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SubscriptionOptionsComponent
  ]
})
export class SubscriptionModule { }
