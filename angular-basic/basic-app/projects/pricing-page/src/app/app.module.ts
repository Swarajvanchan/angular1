import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PricingNavComponent } from './pricing-nav/pricing-nav.component';
import { PricingInfoComponent } from './pricing-info/pricing-info.component';
import { PricingCartComponent } from './pricing-cart/pricing-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingNavComponent,
    PricingInfoComponent,
    PricingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
