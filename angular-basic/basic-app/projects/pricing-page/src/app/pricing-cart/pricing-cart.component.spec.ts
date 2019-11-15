import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCartComponent } from './pricing-cart.component';

describe('PricingCartComponent', () => {
  let component: PricingCartComponent;
  let fixture: ComponentFixture<PricingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
