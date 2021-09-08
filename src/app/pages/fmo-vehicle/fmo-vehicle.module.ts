import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QRCodeModule} from 'angularx-qrcode';
import { FmoVehicleRoutingModule } from './fmo-vehicle-routing.module';
import { FmoVehicleRegistrationComponent } from './fmo-vehicle-registration/fmo-vehicle-registration.component';
import { FmoVehicleRegisteredComponent } from './fmo-vehicle-registered/fmo-vehicle-registered.component';
import { FmoVehicleScanComponent } from './fmo-vehicle-scan/fmo-vehicle-scan.component';



@NgModule({
  declarations: [
  FmoVehicleRegistrationComponent,
  FmoVehicleRegisteredComponent,
  FmoVehicleScanComponent
],
  imports: [
    CommonModule,
    FmoVehicleRoutingModule,
    QRCodeModule
  
  ]
})
export class FmoVehicleModule { }
