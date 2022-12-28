import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrxnDashboardComponent } from './trxn-dashboard.component';

describe('TrxnDashboardComponent', () => {
  let component: TrxnDashboardComponent;
  let fixture: ComponentFixture<TrxnDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrxnDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrxnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
