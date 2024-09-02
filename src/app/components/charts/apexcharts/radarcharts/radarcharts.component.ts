import { Component, ViewChild } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexChart,
    ApexXAxis,
    ChartComponent,
    ApexStroke,
    ApexMarkers,
    ApexFill,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis
  } from "ng-apexcharts";
  
  export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    tooltip: any;
    plotOptions: ApexPlotOptions;
    fill: ApexFill;
    colors: string[];
    yaxis: ApexYAxis;
    markers: ApexMarkers;
    xaxis: ApexXAxis;
  };
  

@Component({
  selector: 'app-radarcharts',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './radarcharts.component.html',
  styleUrl: './radarcharts.component.scss'
})
export class RadarchartsComponent {
    @ViewChild("chart")
    chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>|any;
    public chartOptions1: Partial<ChartOptions>|any;
    public chartOptions2: Partial<ChartOptions>|any;
  
  
  
    constructor() {
      this.chartOptions = {
        series: [
          {
            name: "Series 1",
            data: [80, 50, 30, 40, 100, 20]
          }
        ],
        chart: {
          height: 350,
          type: "radar"
        },
        title: {
          text: "Basic Radar Chart"
        },
        xaxis: {
          categories: ["January", "February", "March", "April", "May", "June"]
        }
      };
  
    this.chartOptions1= {
        series: [
          {
            name: "Series Blue",
            data: [80, 50, 30, 40, 100, 20]
          },
          {
            name: "Series Green",
            data: [20, 30, 40, 80, 20, 80]
          },
          {
            name: "Series Orange",
            data: [44, 76, 78, 13, 43, 10]
          }
        ],
        chart: {
          height: 350,
          type: "radar",
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
          }
        },
        title: {
          text: "Radar Chart - Multi Series"
        },
        stroke: {
          width: 0
        },
        fill: {
          opacity: 0.4
        },
        markers: {
          size: 0
        },
        xaxis: {
          categories: ["2011", "2012", "2013", "2014", "2015", "2016"]
        }
      };
      this.chartOptions2= {
        series: [
          {
            name: "Series 1",
            data: [20, 100, 40, 30, 50, 80, 33]
          }
        ],
        chart: {
          height: 350,
          type: "radar"
        },
        dataLabels: {
          enabled: true
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColor: "#e9e9e9",
              fill: {
                // colors: ["#f8f8f8", "#fff"]
              }
            }
          }
        },
        title: {
          text: "Radar with Polygon Fill"
        },
        colors: ['#23b7e5'],
        markers: {
          size: 4,
          colors: ["#fff"],
          strokeColors: ["#23b7e5"],
          strokeWidth: 2
        },
        tooltip: {
          y: {
            formatter: function(val: any) {
              return val;
            }
          }
        },
        xaxis: {
          categories: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function(val: any, i: number) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            }
          }
        }
    }
  }
}
