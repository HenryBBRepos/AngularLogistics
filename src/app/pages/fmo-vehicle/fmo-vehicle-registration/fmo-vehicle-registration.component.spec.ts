import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoVehicleRegistrationComponent } from './fmo-vehicle-registration.component';

describe('FmoVehicleRegistrationComponent', () => {
  let component: FmoVehicleRegistrationComponent;
  let fixture: ComponentFixture<FmoVehicleRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoVehicleRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoVehicleRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
