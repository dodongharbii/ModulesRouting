import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBasicComponent } from './offer-basic.component';

describe('OfferBasicComponent', () => {
  let component: OfferBasicComponent;
  let fixture: ComponentFixture<OfferBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
