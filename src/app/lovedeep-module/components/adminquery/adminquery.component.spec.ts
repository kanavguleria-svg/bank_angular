import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminqueryComponent } from './adminquery.component';

describe('AdminqueryComponent', () => {
  let component: AdminqueryComponent;
  let fixture: ComponentFixture<AdminqueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminqueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
