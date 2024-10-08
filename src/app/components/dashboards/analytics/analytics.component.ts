import { ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import ApexCharts from 'apexcharts'
import { ChartOptions } from 'chart.js';
import { SharedModule } from '../../../shared/shared.module';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;
  public chartOptions3: Partial<ChartOptions> | any;
  public chartOptions4: Partial<ChartOptions> | any;
  public chartOptions5: Partial<ChartOptions> | any;
  public chartOptions6: Partial<ChartOptions> | any;
  public chartOptions7: Partial<ChartOptions> | any;
  optionsCircle1:any;
  optionsCircle2:any;
  optionsCircle3:any;

  constructor() {
    this.optionsCircle1 = {
      series: [1754, 1234, 878, 270],
      labels: ["Mobile", "Tablet", "Desktop", "Others"],
      chart: {
          height: 247,
          type: 'donut',
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
          colors: "#fff",
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
                              return val + "%"
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
      colors: ["rgba(132, 90, 223, 1)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)",],
          
  
    };
    this.chartOptions = {
      series: [
        {
          name: 'Views',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 45, 35],
        },
        {
          name: 'Followers',
          type: 'line',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 27],
        },
      ],
      chart: {
        toolbar: {
          show: false,
        },
        type: 'line',
        height: 250,
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3,
      },
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1.1],
        curve: ['straight', 'smooth'],
      },
      legend: {
        show: true,
        position: 'top',
      },
      xaxis: {
        axisBorder: {
          color: '#e9e9e9',
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '20%',
          borderRadius: 2,
        },
      },
      colors: ['#845adf','#44c2e9'],
    };  
    this.chartOptions1 = {
      series: [
        {
            name: 'Session',
            data: [24, 23, 10, 21, 27, 24, 16, 15, 17, 22, 19, 19],
            type: 'line',
        },
        {
            name: 'Bounce Rate',
            data: [20, 23, 26, 22, 20, 26, 28, 26, 22, 27, 25, 26],
            type: 'bar',
        },
    ],
    chart: {
        height: 308,
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false,
        show: true,
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    legend: {
        show: true,
        position: 'top',
    },
    plotOptions: {
        bar: {
            borderRadius: 5,
            columnWidth: "40%",
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    colors: ["rgb(132, 90, 223)", "#ededed"],
    stroke: {
        curve: ['smooth', 'stepline'],
        width: [2, 0],
        columnWidth: '10%'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
            color: '#e9e9e9',
        },
    }
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'New Users',
          data: [32, 15, 63, 51, 36, 62, 99, 42, 78, 76, 32, 120],
        },
        {
          name: 'Sessions',
          data: [56, 58, 38, 50, 64, 45, 55, 32, 15, 63, 51, 136],
        },
        {
          name: 'Avg Session Duration',
          data: [48, 29, 50, 69, 20, 59, 52, 12, 48, 28, 17, 98],
        },
      ],
      chart: {
        height: 387,
        type: 'line',
        toolbar: {
          show: false,
        },
        background: 'none',
        fill: '#fff',
      },
      grid: {
        borderColor: '#f2f6f7',
      },
      colors: ['rgb(132, 90, 223)', '#23b7e5', '#f5b849'],
      background: 'transparent',
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        width: 3,
      },
      // dataLabels: {
      //   enabled: false,
      // },
      legend: {
        show: true,
        position: 'top',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
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
          offsetY: 0,
        },
        labels: {
          rotate: -90,
        },
      },
      yaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
    this.chartOptions3={
      chart: {
        type: 'line',
        height: 40,
        width: 120,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.1
        }
    },
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Value',
        data: [0, 21, 54, 38, 56, 24, 65]
    }],
    yaxis: {
        min: 0,
        show: false
    },
    xaxis: {
        show: false,
        axisTicks: {
            show: false,
            axisBorder: {
              show: false
          },
        },
        axisBorder: {
            show: false
        }
    },
    colors: ['#23b7e5'],

    }
    this.chartOptions4={
      chart: {
        type: 'line',
        height: 45,
        sparkline: {
            enabled: true
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 1,
            color: '#fff',
            opacity: 0.05
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
    },
    fill: {
        gradient: {
            enabled: false
        }
    },
    series: [{
        name: 'Value',
        data: [54, 38, 56, 35, 65, 43, 53, 45, 62, 80, 35, 48]
    }],
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
          show: false
      },
    },
    xaxis: {
        axisBorder: {
            show: false
        },
    },
    colors: ["rgba(132, 90, 223, 0.1)"],
    tooltip: {
        enabled: false,
    }
    }
    this.chartOptions5={
      chart: {
        height: 120,
        width: 100,
        type: "radialBar",
    },

    series: [48],
    colors: ["#23b7e5"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "12px",
                    show: true,
                    fontWeight: 800
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]

    }
    this.chartOptions6={
      chart: {
        height: 120,
        width: 100,
        type: "radialBar",
    },

    series: [65],
    colors: ["#ffc107"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "12px",
                    show: true,
                    fontWeight: 800
                },
              
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Views"]

    }
    this.chartOptions7={
      series: [1754, 1234, 878, 270],
      labels: ["Mobile", "Tablet", "Desktop", "Others"],
      chart: {
          height: 257,
          type: 'donut',
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
          colors: "#fff",
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
                              return val + "%"
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
      colors: ["rgba(132, 90, 223, 1)", "rgba(35, 183, 229, 1)", "rgba(38, 191, 148, 1)", "rgba(245, 184, 73, 1)",],
    }
    this.optionsCircle2={
      chart: {
        height: 120,
        width: 100,
        type: "radialBar",
    },

    series: [48],
    colors: ["#23b7e5"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "12px",
                    show: true,
                    fontWeight: 800
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]

    }
    this.optionsCircle3={
      chart: {
        height: 120,
        width: 100,
        type: "radialBar",
    },

    series: [65],
    colors: ["#ffc107"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "12px",
                    show: true,
                    fontWeight: 800
                },
              
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Views"]

      
    }

  }
}

