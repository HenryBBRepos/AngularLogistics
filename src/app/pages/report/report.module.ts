import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { StatsComponent } from './stats/stats.component';
import { ReportComponent } from './report.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [StatsComponent, ReportComponent, BarChartComponent],
  imports: [
    CommonModule,
    ReportRoutingModule,
    MatDatepickerModule,
    NgbRatingModule,
    ChartsModule
  ]
})
export class ReportModule { }
