import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripTrackingDetailComponent } from './trip-tracking-detail.component';

describe('TripTrackingDetailComponent', () => {
  let component: TripTrackingDetailComponent;
  let fixture: ComponentFixture<TripTrackingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripTrackingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripTrackingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
