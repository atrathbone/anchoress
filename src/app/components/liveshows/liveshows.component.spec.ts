import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveshowsComponent } from './liveshows.component';

describe('LiveshowsComponent', () => {
  let component: LiveshowsComponent;
  let fixture: ComponentFixture<LiveshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveshowsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
