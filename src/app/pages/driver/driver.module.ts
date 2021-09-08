import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import {DriverComponent} from './driver-cp/driver.component';
import {DriverFormComponent} from './driver-form/driver-form.component';
import {DriversComponent} from './drivers/drivers.component';
import {QRCodeModule} from 'angularx-qrcode';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [
    DriverComponent,
    DriverFormComponent,
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    QRCodeModule,
    NgbRatingModule,
    MatBottomSheetModule
  ]
})
export class DriverModule { }
