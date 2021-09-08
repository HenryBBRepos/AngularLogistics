import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehiclesComponent} from './vehicles/vehicles.component';
import {VehicleProfileComponent} from './vehicle-profile/vehicle-profile.component';
import {VehicleRegistrationFormComponent} from './vehicle-registration-form/vehicle-registration-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'vehicles',
    pathMatch: 'full'
  },
  {
    path: 'vehicles',
    component: VehiclesComponent
  },
  {
    path: 'vehicles/id/:id',
    component: VehicleProfileComponent
  },
  {
    path: 'vehicles/register',
    component: VehicleRegistrationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
