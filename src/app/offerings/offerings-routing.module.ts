import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferBasicComponent } from './offer-basic/offer-basic.component';
import { OfferHomeComponent } from './offer-home/offer-home.component';
import { OfferPremiumComponent } from './offer-premium/offer-premium.component';

const routes: Routes = [
  {
    path: 'offerings', component: OfferHomeComponent,
    children: [
      {path: 'basic', component: OfferBasicComponent,},
      {path: 'premium', component: OfferPremiumComponent,},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferingsRoutingModule { }
