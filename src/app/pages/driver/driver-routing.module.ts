import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DriversComponent} from './drivers/drivers.component';
import {DriverComponent} from './driver-cp/driver.component';
import {DriverFormComponent} from './driver-form/driver-form.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'drivers',
    pathMatch: 'full'
  },
  {
    path: 'drivers',
    component: DriversComponent
  },
  {
    path: 'drivers/id/:id',
    component: DriverComponent
  },
  {
    path: 'drivers/create',
    component: DriverFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
