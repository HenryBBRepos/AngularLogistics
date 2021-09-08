import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingRoutingModule } from './tracking-routing.module';
import { MapViewComponent } from './map-view/map-view.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../../../environments/environment';
import { TripTrackingDetailComponent } from './trip-tracking-detail/trip-tracking-detail.component';
import {MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  declarations: [MapViewComponent, TripTrackingDetailComponent],
    imports: [
        CommonModule,
        TrackingRoutingModule,
        AgmCoreModule.forRoot({
            apiKey: environment.googleApiKey
        }),
        MatProgressSpinnerModule
    ]
})
export class TrackingModule { }
