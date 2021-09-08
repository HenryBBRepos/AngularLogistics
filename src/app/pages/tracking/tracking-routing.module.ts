import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapViewComponent} from './map-view/map-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tracking',
    pathMatch: 'full'
  },
  {
    path: 'tracking',
    component: MapViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackingRoutingModule { }
