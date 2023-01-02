import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowuseroffersComponent } from './showuseroffers.component';

describe('ShowuseroffersComponent', () => {
  let component: ShowuseroffersComponent;
  let fixture: ComponentFixture<ShowuseroffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowuseroffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowuseroffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
