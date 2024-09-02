import { Component, ViewChild } from '@angular/core';

import { SharedModule } from "../../../../shared/shared.module";
import { ChartsService } from '../../charts.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexFill,
  ApexYAxis,
  ApexMarkers,
  ApexLegend,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { series } from '../area-charts/data';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  fill: ApexFill;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  tooltip: any; // ApexTooltip;
  toolbar: any;
};

@Component({
    selector: 'app-line-charts',
    standalone: true,
    templateUrl: './line-charts.component.html',
    styleUrl: './line-charts.component.scss',
    imports: [SharedModule, NgApexchartsModule]
})
export class LineChartsComponent {
  public series1: any[] = [];
  public chart1: any = {};
  public xaxis1: any = {};
  public dataLabels1: any = {};
  public grid1: any = {};
  public stroke1: any = {};
  public title1: any = {};
  public labels1: any = {};
  public annotations1: any[] = [];
  public markers1: any = [];
  public tooltip1: any = [];
  public yaxis1: any = [];
  public fill1: any = [];

  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: ChartOptions | any
  public chartOptions1: ChartOptions | any;
  public chartOptions2: ChartOptions | any;
  public chartOptions3: ChartOptions | any;
  public chartOptions4: ChartOptions | any;
  public chartOptions5: ChartOptions | any;
  public chartOptions6: ChartOptions | any;
  public chartOptions7: ChartOptions | any;
  public chartOptions9: ChartOptions | any;
  public chartOptions11: ChartOptions | any;



  public chart1options!: Partial<ChartOptions> | any;
  public chart2options!: Partial<ChartOptions> | any;
  public chart3options!: Partial<ChartOptions> | any;
  public commonOptions1: Partial<ChartOptions> | any = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    toolbar: {
      tools: {
        selection: false,
      },
    },
    markers: {
      size: 6,
      hover: {
        size: 10,
      },
    },
    tooltip: {
      followCursor: false,
      theme: 'dark',
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return '';
          },
        },
      },
    },
    grid: {
      clipMarkers: false,
    },
    xaxis: {
      type: 'datetime',
    },
  };
  
  constructor(private ChartsService: ChartsService) {


    this.chartOptions = {
      series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
          height: 320,
          type: 'line',
          zoom: {
              enabled: false
          }
      },
      colors: ['#845adf'],
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'straight',
          width: 3,
      },
      grid: {
          borderColor: '#f2f5f7',
      },
      title: {
          text: 'Product Trends by Month',
          align: 'left',
          style: {
              fontSize: '13px',
              fontWeight: 'bold',
              color: '#8c9097'
          },
      },
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          labels: {
              show: true,
              style: {
                  colors: "#8c9097",
                  fontSize: '11px',
                  fontWeight: 600,
                  cssClass: 'apexcharts-xaxis-label',
              },
          }
      },
      yaxis: {
          labels: {
              show: true,
              style: {
                  colors: "#8c9097",
                  fontSize: '11px',
                  fontWeight: 600,
                  cssClass: 'apexcharts-yaxis-label',
              },
          }
      }
  };
    this.chartOptions1 = {
    series: [
            {
                name: "High - 2013",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            {
                name: "Low - 2013",
                data: [12, 11, 14, 18, 17, 13, 13]
            }
        ],
        chart: {
            height: 320,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#845adf', '#23b7e5'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Average High & Low Temperature',
            align: 'left',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month',
                fontSize: '13px',
                fontWeight: 'bold',
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
        },
        yaxis: {
            title: {
                text: 'Temperature',
                fontSize: '13px',
                fontWeight: 'bold',
                style: {
                    color: "#8c9097"
                }
            },
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            },
            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetX: -10
        }
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'series',
          data: series.monthDataSeries1.prices,
        },
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      annotations: {
        yaxis: [
          {
            y: 8200,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396',
              },
              text: 'Support',
            },
          },
          {
            y: 8600,
            y2: 9000,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
              borderColor: '#333',
              style: {
                fontSize: '10px',
                color: '#333',
                background: '#FEB019',
              },
              text: 'Y-axis range',
            },
          },
        ],
        xaxis: [
          {
            x: new Date('23 Nov 2017').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
              borderColor: '#775DD0',
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: 'Anno Test',
            },
          },
          {
            x: new Date('26 Nov 2017').getTime(),
            x2: new Date('28 Nov 2017').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
              borderColor: '#B3F7CA',
              style: {
                fontSize: '10px',
                color: '#fff',
                background: '#00E396',
              },
              offsetY: -10,
              text: 'X-axis range',
            },
          },
        ],
        points: [
          {
            x: new Date('01 Dec 2017').getTime(),
            y: 8607.55,
            marker: {
              size: 8,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
              cssClass: 'apexcharts-custom-class',
            },
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },

              text: 'Point Annotation',
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        padding: {
          right: 30,
          left: 20,
        },
      },
      title: {
        text: 'Line with Annotations',
        align: 'left',
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: 'datetime',
      },
    };
    
    const data = this.generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
      min: 30,
      max: 90
  })
    this.chartOptions3 = {
      series: [{
        data: data
    }],
    chart: {
        id: 'chart2',
        type: 'line',
        height: 200,
        toolbar: {
            autoSelected: 'pan',
            show: false
        }
    },
    colors: ['#845adf'],
    stroke: {
        width: 3
    },
    fill: {
        opacity: 1,
    },
    markers: {
        size: 0
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    }
    };

    this.chartOptions4 = {
      series: [
        {
          name: 'series1',
          data: this.generateDayWiseTimeSeries(
            new Date('11 Feb 2017').getTime(),
            185,
            {
              min: 30,
              max: 90,
            }
          ),
        },
      ],
      chart: {
        id: 'chart1',
        height: 130,
        type: 'area',
        brush: {
          target: 'chart2',
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date('19 Jun 2017').getTime(),
            max: new Date('14 Aug 2017').getTime(),
          },
        },
      },
      colors: ['#008FFB'],
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        type: 'datetime',
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        tickAmount: 2,
      },
    };
    this.chartOptions5 = {
      series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
    chart: {
        type: 'line',
        height: 345
    },
    stroke: {
        curve: 'stepline',
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#845adf"],
    title: {
        text: 'Stepline Chart',
        align: 'left'
    },
    markers: {
        hover: {
            sizeOffset: 4
        }
    },
    xaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    }
    };
    this.chartOptions6 = {
      series: [{
        name: 'Sales',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    chart: {
        height: 320,
        type: 'line',
    },
    forecastDataPoints: {
        count: 7
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        tickAmount: 10,
        labels: {
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    title: {
        text: 'Forecast',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#845adf'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        },
    },
    yaxis: {
        min: -10,
        max: 40,
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    }
    };
    this.chartOptions7 = {
      series: [{
        name: 'Peter',
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, {
        name: 'Johnny',
        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
    }, {
        name: 'David',
        data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    }],
    chart: {
        height: 320,
        type: 'line',
        zoom: {
            enabled: false
        },
        animations: {
            enabled: false
        }
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    stroke: {
        width: [3, 3, 2],
        curve: 'straight'
    },
    colors: ["#845adf", "#23b7e5", "#f5b849"],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    title: {
        text: 'Missing data (null values)',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    xaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    }
    };
    this.chartOptions9 = {
      series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
    ],
    chart: {
        height: 320,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [3, 4, 3],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    colors: ["#845adf", "#23b7e5", "#f5b849"],
    title: {
        text: 'Page Statistics',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    legend: {
        tooltipHoverFormatter: function (val:any, opts:any) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
        ],
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val:any) {
                        return val + " (mins)"
                    }
                }
            },
            {
                title: {
                    formatter: function (val:any) {
                        return val + " per session"
                    }
                }
            },
            {
                title: {
                    formatter: function (val:any) {
                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
    };


    function generateDayWiseTimeSeries(baseval:any, count:any, yrange:any) {
      var i = 0;
      var series = [];
      while (i < count) {
          var x = baseval;
          var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

          series.push([x, y]);
          baseval += 86400000;
          i++;
      }
      return series;
  }
    this.chart1options = {
      series: [{
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        id: 'fb',
        group: 'social',
        type: 'line',
        height: 160
    },
    colors: ['#845adf'],
    stroke: {
        curve: 'straight',
        width: 3,
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    }
    };

    this.chart2options = {
       series: [{
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
                min: 10,
                max: 30
            })
        }],
        chart: {
            id: 'tw',
            group: 'social',
            type: 'line',
            height: 160
        },
        stroke: {
            curve: 'straight',
            width: 3,
        },
        colors: ['#23b7e5'],
        grid: {
            borderColor: '#f2f5f7',
        },
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        }
    };
   

    this.chart3options = {
      series: [{
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        id: 'yt',
        group: 'social',
        type: 'area',
        height: 160
    },
    stroke: {
        curve: 'straight',
        width: 3,
    },
    colors: ['#f5b849'],
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    }
    };
    
    this.chartOptions11={
      series: [{
        name: "Basic",
        data: [75, 78, 38, 39, 38, 73, 73, 53, 53, 16, 16, 53]
    },
    {
        name: "Pro",
        data: [35, 35, 62, 63, 13, 13, 60, 60, 41, 41, 82, 82]
    }
    ],
    chart: {
        toolbar: {
            show: false
        },
        height: 285,
        type: 'line',
        zoom: {
            enabled: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.15
        },
    },
    grid: {
        borderColor: '#f1f1f1',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [2, 2],
        curve: ['smooth', 'smooth'],
        lineCap: 'butt',
        dashArray: [0, 0]
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
        tooltipHoverFormatter: function (val: string, opts: { w: { globals: { series: { [x: string]: { [x: string]: string; }; }; }; }; seriesIndex: string | number; dataPointIndex: string | number; }) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
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
            offsetY: 0
        },
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: '#305cfc',
            strokeColor: '#fff',
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 11,
            fillColor: '#305cfc',
            strokeColor: '#fff',
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 1,
            dataPointIndex: 10,
            fillColor: '#23b7e5',
            strokeColor: '#fff',
            size: 4,
            shape: "circle"
        }, {
            seriesIndex: 1,
            dataPointIndex: 4,
            fillColor: '#23b7e5',
            strokeColor: '#fff',
            size: 4,
            shape: "circle"
        }],
        hover: {
            sizeOffset: 6
        }
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
                return y.toFixed(0) + "";
            },
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    xaxis: {
        type: 'day',
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
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
            offsetY: 0
        },
        labels: {
            rotate: -90,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function (val: any) {
                        return val
                    }
                }
            },
            {
                title: {
                    formatter: function (val: any) {
                        return val
                    }
                }
            },
            {
                title: {
                    formatter: function (val: any) {
                        return val;
                    }
                }
            }
        ]
    },
    colors: ["rgb(132, 90, 223)", "#23b7e5"],
    }
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }


  public generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: any; max: any }
  ) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
