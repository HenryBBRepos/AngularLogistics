import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverComponent } from './driver-cp/driver.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {DriverRoutingModule} from './driver-routing.module';
import {QRCodeModule} from 'angularx-qrcode';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {DriverFormComponent} from './driver-form/driver-form.component';
import {DriversComponent} from './drivers/drivers.component';

describe('DriverComponent', () => {
  let component: DriverComponent;
  let fixture: ComponentFixture<DriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DriverComponent,
        DriverFormComponent,
        DriversComponent
      ],
      imports: [
        RouterModule.forRoot([]),
        CommonModule,
        DriverRoutingModule,
        QRCodeModule,
        NgbRatingModule,
        MatBottomSheetModule
      ],
      providers: [

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
