import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FmoVehicleRegisteredComponent } from './fmo-vehicle-registered/fmo-vehicle-registered.component';
import { FmoVehicleRegistrationComponent } from './fmo-vehicle-registration/fmo-vehicle-registration.component';
import { FmoVehicleScanComponent } from './fmo-vehicle-scan/fmo-vehicle-scan.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'fmo-vehicles',
    pathMatch: 'full'
  },
  {
    path: 'fmo-vehicles',
    component: FmoVehicleRegistrationComponent
  },
  {
    path: 'fmo-vehicles/fmo-registered-vehicle',
    component: FmoVehicleRegisteredComponent
  },
  {
    path: 'fmo-vehicles/fmo-vehicle-scan',
    component: FmoVehicleScanComponent
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmoVehicleRoutingModule { }
