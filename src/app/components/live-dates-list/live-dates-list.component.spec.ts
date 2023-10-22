import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDatesListComponent } from './live-dates-list.component';

describe('LiveDatesListComponent', () => {
  let component: LiveDatesListComponent;
  let fixture: ComponentFixture<LiveDatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
