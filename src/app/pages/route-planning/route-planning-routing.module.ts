import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoutePlannerComponent} from './route-planner/route-planner.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/route-planner',
    pathMatch: 'full'
  },
  {
    path: 'route-planner',
    component: RoutePlannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutePlanningRoutingModule { }
