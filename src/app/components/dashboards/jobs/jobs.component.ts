import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import  ApexCharts from 'apexcharts';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartOptions } from 'chart.js';
@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,SimplebarAngularModule,NgbModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
    @ViewChild('chart') chart!: ChartComponent;
    public chartOptions: Partial<ChartOptions> | any;
    public chartOptions1: Partial<ChartOptions> | any;
    optionsCircle1: any;
  
    constructor() {
      this.optionsCircle1 = {
          series: [1754, 1234],
        
    
              labels: ["Female", "Male"],
              chart: {
                  events: {
                      mounted: (chart:any) => {
                        chart.windowResizeHandler();
                      }
                    },
                  height: 250,
                  type: 'donut'
              },
              dataLabels: {
                  enabled: false,
              },
    
              legend: {
                  show: false,
              },
              stroke: {
                  show: true,
                  curve: 'smooth',
                  lineCap: 'round',
                  colors: ["#fff"],
                  width: 0,
                  dashArray: 0,
              },
              plotOptions: {
    
                  pie: {
                      expandOnClick: false,
                      donut: {
                          size: '80%',
                          background: 'transparent',
                          labels: {
                              show: true,
                              name: {
                                  show: true,
                                  fontSize: '20px',
                                  color: '#495057',
                                  offsetY: -4
                              },
                              value: {
                                  show: true,
                                  fontSize: '18px',
                                  color: undefined,
                                  offsetY: 8,
                                  formatter: function (val: string) {
                                      return val + "%";
                                  }
                              },
                              total: {
                                  show: true,
                                  showAlways: true,
                                  label: 'Total',
                                  fontSize: '22px',
                                  fontWeight: 600,
                                  color: '#495057',
                              }
    
                          }
                      }
                  }
              },
              colors: ["rgb(132, 90, 223)", "#23b7e5"],
      
        };
      this.chartOptions = {
        series: [
          {
            name: 'Basic',
            data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53],
          },
          {
            name: 'Pro',
            data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82],
          },
        ],
        chart: {
          toolbar: {
            show: false,
          },
          height: 285,
          type: 'line',
          zoom: {
            enabled: false,
          },
          dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.15,
          },
        },
        grid: {
          borderColor: '#f1f1f1',
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [2, 2],
          curve: ['smooth', 'smooth'],
          lineCap: 'butt',
          dashArray: [0, 0],
        },
        title: {
          text: undefined,
        },
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'center',
          fontWeight: 600,
          fontSize: '11px',
          tooltipHoverFormatter: function (
            val: string,
            opts: {
              w: {
                globals: { series: { [x: string]: { [x: string]: string } } };
              };
              seriesIndex: string | number;
              dataPointIndex: string | number;
            }
          ) {
            return (
              val +
              ' - ' +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ''
            );
          },
          labels: {
            colors: '#74767c',
          },
          markers: {
            width: 7,
            height: 7,
            strokeWidth: 0,
            radius: 12,
            offsetX: 0,
            offsetY: 0,
          },
        },
        markers: {
          discrete: [
            {
              seriesIndex: 0,
              dataPointIndex: 5,
              fillColor: '#305cfc',
              strokeColor: '#fff',
              size: 4,
              shape: 'circle',
            },
            {
              seriesIndex: 0,
              dataPointIndex: 11,
              fillColor: '#305cfc',
              strokeColor: '#fff',
              size: 4,
              shape: 'circle',
            },
            {
              seriesIndex: 1,
              dataPointIndex: 10,
              fillColor: '#23b7e5',
              strokeColor: '#fff',
              size: 4,
              shape: 'circle',
            },
            {
              seriesIndex: 1,
              dataPointIndex: 4,
              fillColor: '#23b7e5',
              strokeColor: '#fff',
              size: 4,
              shape: 'circle',
            },
          ],
          hover: {
            sizeOffset: 6,
          },
        },
        yaxis: {
          title: {
            style: {
              color: '#adb5be',
              fontSize: '14px',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-yaxis-label',
            },
          },
          labels: {
            formatter: function (y: number) {
              return y.toFixed(0) + '';
            },
            show: true,
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        xaxis: {
          type: 'day',
          categories: [
            '01 Jan',
            '02 Jan',
            '03 Jan',
            '04 Jan',
            '05 Jan',
            '06 Jan',
            '07 Jan',
            '08 Jan',
            '09 Jan',
            '10 Jan',
            '11 Jan',
            '12 Jan',
          ],
          axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
          },
          axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0,
          },
          labels: {
            rotate: -90,
            style: {
              colors: '#8c9097',
              fontSize: '11px',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-label',
            },
          },
        },
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val: any) {
                  return val;
                },
              },
            },
            {
              title: {
                formatter: function (val: any) {
                  return val;
                },
              },
            },
            {
              title: {
                formatter: function (val: any) {
                  return val;
                },
              },
            },
          ],
        },
        colors: ['rgb(132, 90, 223)', '#23b7e5'],
      };
      this.chartOptions1 = {
        series: [1754, 1234],
        labels: ['Female', 'Male'],
        chart: {
          height: 250,
          type: 'donut',
        },
  
        legend: {
          show: false,
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'round',
          colors: '#fff',
          width: 0,
          dashArray: 0,
        },
        plotOptions: {
          pie: {
            expandOnClick: false,
            donut: {
              size: '80%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '20px',
                  color: '#495057',
                  offsetY: -4,
                },
                value: {
                  show: true,
                  fontSize: '18px',
                  color: undefined,
                  offsetY: 8,
                  formatter: function (val: string) {
                    return val + '%';
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: 'Total',
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#495057',
                },
              },
            },
          },
        },
        colors: ['rgb(132, 90, 223)', '#23b7e5'],
      };
    }
  }
  