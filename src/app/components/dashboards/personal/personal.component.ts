import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;


  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [98, 110, 100, 145, 105, 112, 87, 148, 102],
        },
      ],
      chart: {
        height: 115,
        type: 'area',
        fontFamily: 'Roboto, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      title: {
        text: undefined,
      },
      grid: {
        borderColor: 'transparent',
      },
      xaxis: {
        crosshairs: {
          show: false,
        },
      },
      colors: ['rgb(132, 90, 223)'],

      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 60],
        },
      },
    };
    this.chartOptions1 = {
      series: [
        {
          data: [102, 148, 87, 112, 105, 145, 100, 110, 98],
        },
      ],
      chart: {
        height: 115,
        type: 'area',
        fontFamily: 'Roboto, Arial, sans-serif',
        foreColor: '#5d6162',
        zoom: {
          enabled: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return '';
            },
          },
        },
        marker: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      title: {
        text: undefined,
      },
      grid: {
        borderColor: 'transparent',
      },
      xaxis: {
        crosshairs: {
          show: false,
        },
      },
      colors: ['#64af6d'],

      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.2,
          stops: [0, 60],
        },
      },
    };
    this.chartOptions2= {
      type: 'doughnut',
    data: {
        datasets: [{
            label: 'My First Dataset',
            data: [32, 27, 25, 16],
            backgroundColor: [
                'rgb(132, 90, 223)',
                'rgb(35, 183, 229)',
                'rgb(38, 191, 148)',
                'rgb(245, 184, 73)',
            ]
        }]
    },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
       
    
    }
    
    
  }
}
}
