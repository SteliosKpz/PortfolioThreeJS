import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedashComponent } from './timedash.component';

describe('TimedashComponent', () => {
  let component: TimedashComponent;
  let fixture: ComponentFixture<TimedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
