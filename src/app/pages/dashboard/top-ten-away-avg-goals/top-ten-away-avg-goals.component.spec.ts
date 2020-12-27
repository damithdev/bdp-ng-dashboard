import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenAwayAvgGoalsComponent } from './top-ten-away-avg-goals.component';

describe('TopTenAwayAvgGoalsComponent', () => {
  let component: TopTenAwayAvgGoalsComponent;
  let fixture: ComponentFixture<TopTenAwayAvgGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenAwayAvgGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenAwayAvgGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
