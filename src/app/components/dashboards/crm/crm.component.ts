import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-crm',
  standalone: true,
  imports: [RouterModule,SharedModule,NgApexchartsModule,NgbModule],
  templateUrl: './crm.component.html',
  styleUrl: './crm.component.scss'
})
export class CrmComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;
  public chartOptions3: Partial<ChartOptions> | any;
  public chartOptions4: Partial<ChartOptions> | any;
  public chartOptions5: Partial<ChartOptions> | any;
  public chartOptions6: Partial<ChartOptions> | any;
  public chartOptions7: Partial<ChartOptions> | any;
  optionsCircle1: any;
  optionsCircle: any;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.chartOptions = {
      chart: {
        height: 127,
        width: 100,
        type: 'radialBar',
      },

      series: [48],
      // colors: ['#fff'],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '55%',
            background: '#fff',
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: '#4b9bfa',
              fontSize: '.625rem',
              show: false,
            },
            value: {
              offsetY: 5,
              color: '#4b9bfa',
              fontSize: '.875rem',
              show: true,
              fontWeight: 600,
            },
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Status'],
      colors:['#fff']
    };

    this.chartOptions1 = {
      series: [
        {
          type: 'line',
          name: 'Profit',
          data: [
            {
              x: 'Jan',
              y: 100,
            },
            {
              x: 'Feb',
              y: 210,
            },
            {
              x: 'Mar',
              y: 180,
            },
            {
              x: 'Apr',
              y: 454,
            },
            {
              x: 'May',
              y: 230,
            },
            {
              x: 'Jun',
              y: 320,
            },
            {
              x: 'Jul',
              y: 656,
            },
            {
              x: 'Aug',
              y: 830,
            },
            {
              x: 'Sep',
              y: 350,
            },
            {
              x: 'Oct',
              y: 350,
            },
            {
              x: 'Nov',
              y: 210,
            },
            {
              x: 'Dec',
              y: 410,
            },
          ],
        },
        {
          type: 'line',
          name: 'Revenue',
          chart: {
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 5,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1,
            },
          },
          data: [
            {
              x: 'Jan',
              y: 180,
            },
            {
              x: 'Feb',
              y: 620,
            },
            {
              x: 'Mar',
              y: 476,
            },
            {
              x: 'Apr',
              y: 220,
            },
            {
              x: 'May',
              y: 520,
            },
            {
              x: 'Jun',
              y: 780,
            },
            {
              x: 'Jul',
              y: 435,
            },
            {
              x: 'Aug',
              y: 515,
            },
            {
              x: 'Sep',
              y: 738,
            },
            {
              x: 'Oct',
              y: 454,
            },
            {
              x: 'Nov',
              y: 525,
            },
            {
              x: 'Dec',
              y: 230,
            },
          ],
        },
        {
          type: 'area',
          name: 'Sales',
          chart: {
            dropShadow: {
              enabled: true,
              enabledOnSeries: undefined,
              top: 5,
              left: 0,
              blur: 3,
              color: '#000',
              opacity: 0.1,
            },
          },
          data: [
            {
              x: 'Jan',
              y: 200,
            },
            {
              x: 'Feb',
              y: 530,
            },
            {
              x: 'Mar',
              y: 110,
            },
            {
              x: 'Apr',
              y: 130,
            },
            {
              x: 'May',
              y: 480,
            },
            {
              x: 'Jun',
              y: 520,
            },
            {
              x: 'Jul',
              y: 780,
            },
            {
              x: 'Aug',
              y: 435,
            },
            {
              x: 'Sep',
              y: 475,
            },
            {
              x: 'Oct',
              y: 738,
            },
            {
              x: 'Nov',
              y: 454,
            },
            {
              x: 'Dec',
              y: 480,
            },
          ],
        },
      ],
      chart: {
        height: 333,
        animations: {
          speed: 500,
        },
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 8,
          left: 0,
          blur: 3,
          color: '#000',
          opacity: 0.1,
        },
      },
      colors: ["rgb(132, 90, 223)", "rgba(35, 183, 229, 0.85)", "rgba(119, 119, 142, 0.05)"],
      dataLabels: {
        enabled: false,
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3,
        yaxis:{
          show:false,
        }
      },
      stroke: {
        curve: 'smooth',
        width: [2, 2, 0],
        dashArray: [0, 5, 0],
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: function (value: string) {
            return '$' + value;
          },
        },
      },
      tooltip: {
        y: [
          {
            formatter: function (e: number | undefined) {
              return void 0 !== e ? '$' + e.toFixed(0) : e;
            },
          },
          {
            formatter: function (e: number | undefined) {
              return void 0 !== e ? '$' + e.toFixed(0) : e;
            },
          },
          {
            formatter: function (e: number | undefined) {
              return void 0 !== e ? e.toFixed(0) : e;
            },
          },
        ],
      },
      legend: {
        show: true,
        customLegendItems: ['Profit', 'Revenue', 'Sales'],
        inverseOrder: true,
      },
      title: {
        text: 'Revenue Analytics with sales & profit (USD)',
        align: 'left',
        style: {
          fontSize: '.8125rem',
          fontWeight: 'semibold',
          color: '#8c9097',
        },
      },
      markers: {
        hover: {
          sizeOffset: 5,
        },
      },
    };
    this.chartOptions2 = {
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
      plugins: [{
          afterUpdate: function (chart: { getDatasetMeta: (arg0: number) => { (): any; new(): any; data: any; }; chartArea: { left: any; right: any; top: any; bottom: any; }; }) {
              const arcs = chart.getDatasetMeta(0).data;
  
              arcs.forEach(function (arc: { round: { x: number; y: number; radius: number; thickness: number; backgroundColor: any; }; outerRadius: number; innerRadius: number; options: { backgroundColor: any; }; }) {
                  arc.round = {
                      x: (chart.chartArea.left + chart.chartArea.right) / 2,
                      y: (chart.chartArea.top + chart.chartArea.bottom) / 2,
                      radius: (arc.outerRadius + arc.innerRadius) / 2,
                      thickness: (arc.outerRadius - arc.innerRadius) / 2,
                      backgroundColor: arc.options.backgroundColor
                  }
              });
          },
          afterDraw: (chart: { getDatasetMeta?: any; ctx?: any; canvas?: any; }) => {
              const {
                  ctx,
                  canvas
              } = chart;
  
              chart.getDatasetMeta(0).data.forEach((arc: { startAngle: number; endAngle: number; round: { x: any; y: any; radius: number; thickness: any; }; options: { backgroundColor: any; }; }) => {
                  const startAngle = Math.PI / 2 - arc.startAngle;
                  const endAngle = Math.PI / 2 - arc.endAngle;
  
                  ctx.save();
                  ctx.translate(arc.round.x, arc.round.y);
                  ctx.fillStyle = arc.options.backgroundColor;
                  ctx.beginPath();
                  ctx.arc(arc.round.radius * Math.sin(endAngle), arc.round.radius * Math.cos(endAngle), arc.round.thickness, 0, 2 * Math.PI);
                  ctx.closePath();
                  ctx.fill();
                  ctx.restore();
              });
          }
      }]

    }

    this.chartOptions3 = {
      chart: {
        type: 'line',
        height: 40,
        width: 100,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 0,
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.9,
            opacityTo: 0.9,
            stops: [0, 98],
        }
    },
    series: [{
        name: 'Value',
        data: [20, 14, 19, 10, 23, 20, 22, 9, 12]
    }],
    yaxis: {
        min: 0,
        show: false,
        axisBorder: {
            show: false
        },
    },
    xaxis: {
        show: false,
        axisBorder: {
            show: false
        },
    },
    tooltip: {
        enabled: false,
    },
    colors: ["rgb(132, 90, 223)"],
    };


    this.chartOptions4 = {
      chart: {
        type: 'line',
        height: 40,
        width: 100,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 0,
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
        },
      },
      series: [
        {
          name: 'Value',
          data: [20, 14, 20, 22, 9, 12, 19, 10, 25],
        },
      ],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
          show: false,
        },
      },
      xaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      colors: ['rgb(35, 183, 229)'],
    };


    this.chartOptions5 = {
      chart: {
        type: 'line',
        height: 40,
        width: 100,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 0,
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
        },
      },
      series: [
        {
          name: 'Value',
          data: [20, 20, 22, 9, 14, 19, 10, 25, 12],
        },
      ],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
          show: false,
        },
      },
      xaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      colors: ['rgb(38, 191, 148)'],
    };
    this.chartOptions6 = {
      chart: {
        type: 'line',
        height: 40,
        width: 100,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1.5,
        dashArray: 0,
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0, 98],
        },
      },
      series: [
        {
          name: 'Value',
          data: [20, 20, 22, 9, 12, 14, 19, 10, 25],
        },
      ],
      yaxis: {
        min: 0,
        show: false,
        axisBorder: {
          show: false,
        },
      },
      xaxis: {
        show: false,
        axisBorder: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
      },
      colors: ['rgb(245, 184, 73)'],
    };
    this.chartOptions7 = {
      series: [
        {
          name: 'Profit Earned',
          data: [44, 42, 57, 86, 58, 55, 70],
        },
        {
          name: 'Total Sales',
          data: [34, 22, 37, 56, 21, 35, 60],
        },
      ],
      chart: {
        type: 'bar',
        height: 180,
        toolbar: {
          show: false,
        },
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3,
      },
      colors: ['rgb(132, 90, 223)', '#e4e7ed'],
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: -100,
                to: -46,
                color: '#ebeff5',
              },
              {
                from: -45,
                to: 0,
                color: '#ebeff5',
              },
            ],
          },
          columnWidth: '60%',
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: undefined,
      },
      legend: {
        show: false,
        position: 'top',
      },
      yaxis: {
        title: {
          style: {
            color: '#adb5be',
            fontSize: '13px',
            fontFamily: 'poppins, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        labels: {
          formatter: function (y: number) {
            return y.toFixed(0) + '';
          },
        },
      },
      xaxis: {
        type: 'week',
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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
        },
      },
    };
    this.optionsCircle1 = {
      series: [32, 27, 25, 16],
      colors: ["rgb(132, 90, 223)", "rgb(35, 183, 229)",  "rgb(245, 184, 73)", "rgb(38, 191, 148)",],
      chart: {
        height: 250,
        type: 'donut',
        dropShadow: {
          enabled: true,
          enabledOnSeries: undefined,
          top: 5,
          left: 0,
          blur: 3,
          color: '#525050',
          opacity: 0.1,
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {

        pie: {
            expandOnClick: false,
            donut: {
                size: '80%',
                labels: {
                    show: false,
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

                }
            }
        }
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
  
    };
    this.optionsCircle={
      chart: {
        height: 127,
        width: 100,
        type: 'radialBar',
      },

      series: [48],
      // colors: ['#fff'],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '55%',
            background: '#fff',
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: '#4b9bfa',
              fontSize: '.625rem',
              show: false,
            },
            value: {
              offsetY: 5,
              color: '#4b9bfa',
              fontSize: '.875rem',
              show: true,
              fontWeight: 600,
            },
          },
        },
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Status'],
      colors:['#fff']
    }
  }


  ngAfterViewInit() {
    // Find the element with class 'page-header-breadcrumb'
    const breadcrumbElement = this.el.nativeElement.querySelector('.page-header-breadcrumb');

    if (breadcrumbElement) {
      // Find the upper sibling of the element with class 'page-header-breadcrumb'
      const upperSibling = breadcrumbElement.previousElementSibling;

      // Remove the upper sibling if it exists
      if (upperSibling) {
        this.renderer.removeChild(this.el.nativeElement, upperSibling);
      }
    }
  }
    
}
