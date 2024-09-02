import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
    @ViewChild("chart") chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions>|any;
    public chartOptions1: Partial<ChartOptions>|any;

    constructor(){
    this.chartOptions= {
       series: [{
          name: "Earnings",
          data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
      }, {
          name: "Students",
          data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
      }],
      chart: {
          height: 340,
          type: "bar",
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          width: [1.1, 1.1],
          show: true,
          curve: ['smooth', 'smooth'],
      },
      grid: {
          borderColor: '#f3f3f3',
          strokeDashArray: 3
      },
      xaxis: {
          axisBorder: {
              color: 'rgba(119, 119, 142, 0.05)',
          },
      },
      legend: {
          show: false
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      markers: {
          size: 0
      },
      colors: ["rgb(132, 90, 223)", "#e9e9e9"],
      plotOptions: {
          bar: {
              columnWidth: "50%",
              borderRadius: 2,
          }
      },
    }
    this.chartOptions1= {
      series: [{
        name: 'Paid',
        data: [55, 55, 42, 42, 55, 55, 38, 38, 53, 53, 35, 35],
        type: 'line',
    }, {
        name: 'UnPaid',
        data: [35, 35, 46, 46, 35, 35, 48, 48, 33, 33, 38, 38],
        type: "line",
    }],
    chart: {
        height: 270,
        toolbar: {
            show: false,
        },
        background: 'none',
        fill: "#fff",
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    colors: ["rgb(132, 90, 223)", "rgba(230, 83, 60,0.5)"],
    background: 'transparent',
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
        dashArray: [0, 5],
    },
    xaxis: {
        type: 'month',
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"],
        show: false,
        axisBorder: {
            show: false,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
       
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: 'top',
    },
    xaxis: {
      show: false,
      axisBorder: {
          show: false,
          color: 'rgba(119, 119, 142, 0.05)',
          offsetX: 0,
          offsetY: 0,
       
        },
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90,
        }
    },
    yaxis: {
        show: false,
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },}
  }
  }
}
