import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import * as chartData from '../../../../shared/data/apexchart.data'; 

@Component({
  selector: 'app-radialbarcharts',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './radialbarcharts.component.html',
  styleUrl: './radialbarcharts.component.scss'
})
export class RadialbarchartsComponent {
    public BasicPieChartData: any = chartData.BasicPieChartData;
    public multipleradialBarChart: any = chartData.multipleradialBarChart;
    public CustomAngleChartData: any = chartData.CustomAngleChartData;
    public GradientCircleChartData: any = chartData.GradientCircleChartData;
    public CircleImageChartData: any = chartData.CircleImageChartData;
    public StrokedCircularGaugeData: any = chartData.StrokedCircularGaugeData;
    public SemiCircularGaugeData: any = chartData.SemiCircularGaugeData;
}
