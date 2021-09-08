import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSearchListComponent } from './driver-search-list.component';

describe('DriverSearchListComponent', () => {
  let component: DriverSearchListComponent;
  let fixture: ComponentFixture<DriverSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
