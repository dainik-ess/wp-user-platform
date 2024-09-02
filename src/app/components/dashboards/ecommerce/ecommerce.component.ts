import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import ApexCharts from 'apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../shared/shared.module';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterModule, SharedModule, NgApexchartsModule, NgbModule],
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss'],
})
export class EcommerceComponent  {

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Total Orders',
          data: [44, 42, 57, 86, 112, 55, 70, 43, 23, 54, 77, 34],
        },
      ],
      chart: {
        type: 'bar',
        height: 200,
      },
      grid: {
        borderColor: '#f2f6f7',
      },
      colors: [
        'rgba(132, 90, 223, 0.3)',
        'rgba(132, 90, 223, 0.3)',
        'rgba(132, 90, 223, 0.3)',
        'rgba(132, 90, 223, 0.3)',
        'rgb(132, 90, 223)',
        'rgba(132, 90, 223, 0.3)',
        '#e4e7ed',
        '#e4e7ed',
        '#e4e7ed',
        '#e4e7ed',
        '#e4e7ed',
        '#e4e7ed',
      ],
      plotOptions: {
        bar: {
          columnWidth: '25%',
          distributed: true,
          borderRadius: 7,
        },
      },
      dataLabels: {
        enabled: false,
      },
      // legend: {
      //     show: false,
      // },
      yaxis: {
        title: {
          style: {
            color: '#adb5be',
            fontSize: '12px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
            cssClass: 'apexcharts-yaxis-label',
          },
        },
        labels: {
          formatter: function (y: number) {
            return y.toFixed(0) + '';
          },
        },
      },
      legend:
        {show:false}
      ,
      xaxis: {
        type: 'month',
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'sep',
          'oct',
          'nov',
          'dec',
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
        },
      },
    };
  }
}