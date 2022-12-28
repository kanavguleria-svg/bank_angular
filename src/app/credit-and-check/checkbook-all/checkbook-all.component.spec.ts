import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookAllComponent } from './checkbook-all.component';

describe('CheckbookAllComponent', () => {
  let component: CheckbookAllComponent;
  let fixture: ComponentFixture<CheckbookAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckbookAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckbookAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
