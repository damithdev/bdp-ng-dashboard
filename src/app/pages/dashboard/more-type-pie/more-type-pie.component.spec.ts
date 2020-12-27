import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTypePieComponent } from './more-type-pie.component';

describe('MoreTypePieComponent', () => {
  let component: MoreTypePieComponent;
  let fixture: ComponentFixture<MoreTypePieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTypePieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTypePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
