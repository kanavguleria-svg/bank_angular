import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersAmdinComponent } from './offers-amdin.component';

describe('OffersAmdinComponent', () => {
  let component: OffersAmdinComponent;
  let fixture: ComponentFixture<OffersAmdinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersAmdinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersAmdinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
