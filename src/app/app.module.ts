import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { NgbCollapse, NgbCollapseModule, NgbModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqComponent } from './faq/faq.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { QuotesComponent } from './quotes/quotes.component';
import { HomeComponent } from './home/home.component';
import { SubscriptionModule } from './subscription/subscription.module';

@NgModule({
  declarations: [AppComponent, FaqComponent, ReviewsComponent, QuotesComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    PaymentModule,
    NgbModule, 
    NgbToastModule,
    HttpClientModule,
    SubscriptionModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }