import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPremiumComponent } from './offer-premium.component';

describe('OfferPremiumComponent', () => {
  let component: OfferPremiumComponent;
  let fixture: ComponentFixture<OfferPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
