import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPlayedCityComponent } from './total-played-city.component';

describe('TotalPlayedCityComponent', () => {
  let component: TotalPlayedCityComponent;
  let fixture: ComponentFixture<TotalPlayedCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPlayedCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPlayedCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
