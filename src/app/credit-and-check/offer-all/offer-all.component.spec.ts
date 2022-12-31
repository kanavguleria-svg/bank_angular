import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAllComponent } from './offer-all.component';

describe('OfferAllComponent', () => {
  let component: OfferAllComponent;
  let fixture: ComponentFixture<OfferAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
