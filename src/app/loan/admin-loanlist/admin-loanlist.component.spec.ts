import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoanlistComponent } from './admin-loanlist.component';

describe('AdminLoanlistComponent', () => {
  let component: AdminLoanlistComponent;
  let fixture: ComponentFixture<AdminLoanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLoanlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
