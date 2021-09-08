import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutePlanningRoutingModule } from './route-planning-routing.module';
import { RoutePlannerComponent } from './route-planner/route-planner.component';


@NgModule({
  declarations: [RoutePlannerComponent],
  imports: [
    CommonModule,
    RoutePlanningRoutingModule
  ]
})
export class RoutePlanningModule { }
