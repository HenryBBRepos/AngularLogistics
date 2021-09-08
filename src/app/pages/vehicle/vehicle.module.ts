import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {VehicleProfileComponent} from './vehicle-profile/vehicle-profile.component';
import {VehicleRoutingModule} from './vehicle-routing.module';
import {QRCodeModule} from 'angularx-qrcode';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { VehicleRegistrationFormComponent } from './vehicle-registration-form/vehicle-registration-form.component';
import {ngfModule} from 'angular-file';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material';

@NgModule({
  declarations: [
    VehiclesComponent,
    VehicleProfileComponent,
    VehicleRegistrationFormComponent
  ],
  imports: [
    CommonModule,
    VehicleRoutingModule,
    QRCodeModule,
    MatBottomSheetModule,
    ngfModule,
    MatDialogModule,
    MatFormFieldModule
  ]
})
export class VehicleModule { }
