import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalHomeGoalsBarComponent } from './total-home-goals-bar.component';

describe('TotalHomeGoalsBarComponent', () => {
  let component: TotalHomeGoalsBarComponent;
  let fixture: ComponentFixture<TotalHomeGoalsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalHomeGoalsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalHomeGoalsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
