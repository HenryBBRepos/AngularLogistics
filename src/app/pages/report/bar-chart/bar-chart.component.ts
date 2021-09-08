import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: true
    },
    legend: {
      labels: { fontColor: '#000', fontFamily: 'Ubuntu sans-serif' }
    },
    scales: {
      xAxes: [{
        ticks: { fontColor: '#000' },
        gridLines: { color: 'rgba(255,255,255,0.1)' }
      }],
      yAxes: [{
        ticks: { fontColor: '#000', fontFamily: 'Ubuntu sans-serif' },
        gridLines: { color: '#f5ede2' }
      }]
    },

    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Weekly Report', backgroundColor: '#FDC664', hoverBackgroundColor: '#FDC664' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Last Week Report', backgroundColor: '#D4D4D4', hoverBackgroundColor: '#D4D4D4' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
