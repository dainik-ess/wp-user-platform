import { Component } from '@angular/core';
import * as chartData from './chartjs';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-chartjs',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule,NgChartsModule ],
  templateUrl: './chartjs.component.html',
  styleUrl: './chartjs.component.scss'
})
export class ChartjsComponent {
  constructor() {}

  ngOnInit(): void {}

  //Line Chart
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartType = chartData.lineChartType;
  public lineChartData = chartData.lineChartData;

  // Bar Chart 1
  public barChartData = chartData.barChartData;
  public barChartOptions = chartData.barChartOptions;
  public barChartPlugins = chartData.barChartPlugins;
  public barChartType = chartData.barChartType;

  //Mixed chart Data
  public MixedChart2Data = chartData.MixedChart2Data;
  public MixedChart2Options = chartData.MixedChart2Options;
  public MixedChart2Type = chartData.MixedChart2Type;
  public MixedChart2Legend = chartData.MixedChart2Legend;
  public MixedChart2Plugins = chartData.MixedChart2Plugins;

  //Doughnut and Pie Chart Data
  public PieChartData = chartData.PieChartData;
  public PieChartOptions = chartData.PieChartOptions;
  public PieChartType = chartData.PieChartType;
  public DoughnutChartType = chartData.DoughnutChartType;

  //Scatter Chart Data
  public ScatterChartData = chartData.ScatterChartData;
  public ScatterChartOptions = chartData.ScatterChartOptions;
  public ScatterChartType = chartData.ScatterChartType;

  //Bubble Chart Data
  public bubbleChartData = chartData.bubbleChartData;
  public bubbleChartOptions = chartData.bubbleChartOptions;
  public bubbleChartType = chartData.bubbleChartType;

  //Radar Chart
  public radarChartData = chartData.radarChartData;
  public radarChartOptions = chartData.radarChartOptions;
  public radarChartType = chartData.radarChartType;

  //Polar Chart
  public polarChartData = chartData.polarChartData;
  public polarChartOptions = chartData.polarChartOptions;
  public polarChartType = chartData.polarChartType;

}
