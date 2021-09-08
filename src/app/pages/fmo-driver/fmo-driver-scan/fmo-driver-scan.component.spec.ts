import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoDriverScanComponent } from './fmo-driver-scan.component';

describe('FmoDriverScanComponent', () => {
  let component: FmoDriverScanComponent;
  let fixture: ComponentFixture<FmoDriverScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoDriverScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoDriverScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
