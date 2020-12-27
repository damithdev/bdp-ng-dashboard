import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalWinLossComponent } from './total-win-loss.component';

describe('TotalWinLossComponent', () => {
  let component: TotalWinLossComponent;
  let fixture: ComponentFixture<TotalWinLossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalWinLossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalWinLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
