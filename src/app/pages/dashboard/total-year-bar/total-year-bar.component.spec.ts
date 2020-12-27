import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalYearBarComponent } from './total-year-bar.component';

describe('TotalYearBarComponent', () => {
  let component: TotalYearBarComponent;
  let fixture: ComponentFixture<TotalYearBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalYearBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalYearBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
