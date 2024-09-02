import { Component, ViewChild } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '../../../../shared/shared.module';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexStroke,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  fill: any;
  colors: any;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  xaxis: ApexXAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-heatmapcharts',
  standalone: true,
  imports: [NgApexchartsModule, SharedModule],
  templateUrl: './heatmapcharts.component.html',
  styleUrl: './heatmapcharts.component.scss'
})
export class HeatmapchartsComponent {
  @ViewChild('chart')
  chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;
  public chartOptions3: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Metric1',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric2',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric3',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric4',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric5',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric6',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric7',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric9',
          data: this.generateData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#008FFB'],
      title: {
        text: 'HeatMap Chart (Single color)',
      },
    };
    this.chartOptions1 = {
      series: [
        {
          name: 'W1',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W2',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W3',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W4',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W5',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W6',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W7',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W8',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W9',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W10',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W11',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W12',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W13',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W14',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'W15',
          data: this.generateData(8, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false,
      },
      colors: [
        '#F3B415',
        '#F27036',
        '#663F59',
        '#6A6E94',
        '#4E88B4',
        '#00A7C6',
        '#18D8D8',
        '#A9D794',
        '#46AF78',
        '#A93F55',
        '#8C5E58',
        '#2176FF',
        '#33A1FD',
        '#7A918D',
        '#BAFF29',
      ],
      xaxis: {
        type: 'category',
        categories: [
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '01:00',
          '01:30',
        ],
      },
      title: {
        text: 'HeatMap Chart (Different color shades for each series)',
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    };
    this.chartOptions2 = {
      series: [
        {
          name: 'Jan',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Feb',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Mar',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Apr',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'May',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Jun',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Jul',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Aug',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
        {
          name: 'Sep',
          data: this.generateData(20, {
            min: -30,
            max: 55,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          colorScale: {
            ranges: [
              {
                from: -30,
                to: 5,
                name: 'low',
                color: '#00A100',
              },
              {
                from: 6,
                to: 20,
                name: 'medium',
                color: '#128FD9',
              },
              {
                from: 21,
                to: 45,
                name: 'high',
                color: '#FFB200',
              },
              {
                from: 46,
                to: 55,
                name: 'extreme',
                color: '#FF0000',
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'HeatMap Chart with Color Range',
      },
    };
    this.chartOptions3 = {
      series: [
        {
          name: 'Metric1',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric2',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric3',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric4',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric5',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric6',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric7',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: 'Metric8',
          data: this.generateData(20, {
            min: 0,
            max: 90,
          }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
      },
      stroke: {
        width: 0,
      },
      plotOptions: {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 50,
                color: '#008FFB',
              },
              {
                from: 51,
                to: 100,
                color: '#00E396',
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff'],
        },
      },
      xaxis: {
        type: 'category',
      },
      title: {
        text: 'Rounded (Range without Shades)',
      },
    };
  }

  public generateData(count: number, yrange: { min: any; max: any }) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
