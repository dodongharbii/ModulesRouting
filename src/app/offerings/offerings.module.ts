import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfferingsRoutingModule } from './offerings-routing.module';
import { OfferHomeComponent } from './offer-home/offer-home.component';
import { OfferBasicComponent } from './offer-basic/offer-basic.component';
import { OfferPremiumComponent } from './offer-premium/offer-premium.component';


@NgModule({
  declarations: [
    OfferHomeComponent,
    OfferBasicComponent,
    OfferPremiumComponent
  ],
  imports: [
    CommonModule,
    OfferingsRoutingModule
  ],
  exports: [OfferHomeComponent],
})
export class OfferingsModule { }
