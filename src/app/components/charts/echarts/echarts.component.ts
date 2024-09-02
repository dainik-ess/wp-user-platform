import { Component, NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';
import * as chartData from '../../../shared/data/echart.data';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
@Component({
  selector: 'app-echarts',
  standalone: true,
  imports: [SharedModule, NgxEchartsModule],
   providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: echarts }),
    },
  ],
  templateUrl: './echarts.component.html',
  styleUrl: './echarts.component.scss'
})
export class EchartsComponent {
  public echartHorizontalLineBarChart = chartData.echartHorizontalLineBarChart;
  public smoothlinechart = chartData.smoothlinechart;
  public basicAreaChart = chartData.basicAreaChart;
  public stackedlineChart = chartData.stackedlineChart;
  public stackedAreaChart = chartData.stackedAreaChart;
  public steplineChart = chartData.steplineChart;
  public basicBarChart = chartData.basicBarChart;
  public barBgChart = chartData.barBgChart;
  public singleBarChart = chartData.singleBarChart;
  public waterFallChart = chartData.waterFallChart;
  public barChartNegativeChart = chartData.barChartNegativeChart;
  public barLableChart = chartData.barLableChart;
  public horizontalBarChart = chartData.horizontalBarChart;
  public horizontalStackedBarChart = chartData.horizontalStackedBarChart;
  public pieChart = chartData.pieChart;
  public doughutChart = chartData.doughutChart;
  public scatterChart = chartData.scatterChart;
  public radarChart = chartData.radarChart;
  public candlestickChart = chartData.candlestickChart;
  public treemapChart = chartData.treemapChart;
  public funnelChart = chartData.funnelChart;
  public guageChart = chartData.guageChart;
  public graphChart = chartData.graphChart;

  options!: EChartsOption;

  ngOnInit(): void {
    this.options = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getVirtualData('2016'),
      },
    };
  }

  getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }


}

type DataT = {
name: string;
value: [string, number];

}
