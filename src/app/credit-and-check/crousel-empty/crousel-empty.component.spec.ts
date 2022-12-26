import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrouselEmptyComponent } from './crousel-empty.component';

describe('CrouselEmptyComponent', () => {
  let component: CrouselEmptyComponent;
  let fixture: ComponentFixture<CrouselEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrouselEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrouselEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
