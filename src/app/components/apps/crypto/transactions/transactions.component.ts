import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexResponsive,
  ApexAnnotations,
  ApexGrid,
  ApexStates,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { interval } from 'rxjs';
export type ChartOptions = {
  series?: ApexAxisChartSeries;
  chart?: ApexChart;
  dataLabels?: ApexDataLabels;
  plotOptions?: ApexPlotOptions;
  yaxis?: ApexYAxis;
  xaxis?: ApexXAxis;
  fill?: ApexFill;
  tooltip?: any;
  stroke?: ApexStroke;
  legend?: ApexLegend;
  title?: ApexTitleSubtitle;
  responsive?: ApexResponsive[];
  colors?: string[];
  annotations?: ApexAnnotations;
  grid?: ApexGrid;
  subtitle?: ApexTitleSubtitle;
  states?: ApexStates;
};
@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgApexchartsModule,NgSelectModule,NgbModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  public chartOptions2!: Partial<ChartOptions> | any;

  constructor(){
    this.chartOptions2 = {
      series: [
        {
          name: "New",
          data: [76, 85, 101, 98, 87, 105],
        },
        {
          name: "Pending",
          data: [35, 41, 36, 26, 45, 48],
        },
        {
          name: "Completed",
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: "Inprogress",
          data: [13, 27, 31, 29, 35, 25],
        },
      ],
      chart: {
        type: "bar",
        height: 210,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          endingShape: "rounded",
        },
      },
      grid: {
        borderColor: "#f2f5f7",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#845adf", "#28d193", "#ffbe14", "#23b7e5"],
      stroke: {
        show: true,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        title: {
          style: {
            color: "#8c9097",
          },
        },
        labels: {
          show: true,
          style: {
            colors: "#8c9097",
            fontSize: "11px",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      fill: {
        opacity: 1,
      },
    };
     };

     public counter1 = 1;
     source = interval(0.2);
     subscribe = this.source.subscribe(() => {
       this.counter1++;
       if (this.counter1 == 42) {
         this.subscribe.unsubscribe();
       }
     });
     public counter2 = 1;
     source2 = interval(0.2);
     subscribe2 = this.source2.subscribe(() => {
       this.counter2++;
       if (this.counter2 == 320) {
         this.subscribe2.unsubscribe();
       }
     });
     public counter3 = 1;
     source3 = interval(0.2);
     subscribe3 = this.source3.subscribe(() => {
       this.counter3++;
       if (this.counter3 == 82) {
         this.subscribe3.unsubscribe();
       }
     });
     public counter4 = 1;
     source4 = interval(0.2);
     subscribe4 = this.source4.subscribe(() => {
       this.counter4++;
       if (this.counter4 == 33) {
         this.subscribe4.unsubscribe();
       }
     });
  }

