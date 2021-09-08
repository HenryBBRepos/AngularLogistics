import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoVehicleRegisteredComponent } from './fmo-vehicle-registered.component';

describe('FmoVehicleRegisteredComponent', () => {
  let component: FmoVehicleRegisteredComponent;
  let fixture: ComponentFixture<FmoVehicleRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoVehicleRegisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoVehicleRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
