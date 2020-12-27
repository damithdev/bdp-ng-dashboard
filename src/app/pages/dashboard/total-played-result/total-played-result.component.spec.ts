import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPlayedResultComponent } from './total-played-result.component';

describe('TotalPlayedResultComponent', () => {
  let component: TotalPlayedResultComponent;
  let fixture: ComponentFixture<TotalPlayedResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalPlayedResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPlayedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
