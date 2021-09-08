import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoVehicleScanComponent } from './fmo-vehicle-scan.component';

describe('FmoVehicleScanComponent', () => {
  let component: FmoVehicleScanComponent;
  let fixture: ComponentFixture<FmoVehicleScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoVehicleScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoVehicleScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
