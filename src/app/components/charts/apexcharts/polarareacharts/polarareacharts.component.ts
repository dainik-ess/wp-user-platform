import { Component } from '@angular/core';

import { SharedModule } from '../../../../shared/shared.module';
import * as chartData from '../../../../shared/data/apexchart.data'; 
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-polarareacharts',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule],
  templateUrl: './polarareacharts.component.html',
  styleUrl: './polarareacharts.component.scss'
})
export class PolarareachartsComponent {
    public PolarAreaChartData: any = chartData.PolarAreaChartData;
    public PolarAreaMonochromeChart: any = chartData.PolarAreaMonochromeChart;
}
